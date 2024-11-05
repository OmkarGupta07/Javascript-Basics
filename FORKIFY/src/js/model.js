import {async} from 'regenerator-runtime';
import { Api_Url,ForkifyApiToken } from './config';
import { getjson,sendjson } from './helper';

export const state={
    recipe:{},
    search:{
        query:'',
        page:1,
        result:[],
        resultsperpage:10,
    },
    bookmark:[],
};

const createrecipeobj=function(data){
    debugger;
    let {recipe}=data.data;

    return {
      id:recipe.id,
      title:recipe.title,
      publisher:recipe.publisher,
      sourceurl:recipe.source_url,
      image:recipe.image_url,
      servings:recipe.servings,
      cookingTime:recipe.cooking_time,
      ingredients:recipe.ingredients,
      ...(recipe.key && {key:recipe.key}),
      
    };
}
export const GetRecipe=async function(id){    
    try{  
        debugger

        const result=await getjson(`${Api_Url}/${id}?key=${ForkifyApiToken}`);
        state.recipe=createrecipeobj(result);

 
 // learned object destructring;

if(state.bookmark.some(b=> b.id === id))
    state.recipe.bookmarked=true;
else
    state.recipe.bookmarked=false;

//console.log(state.recipe);
    }
    catch(err){
        //console.error(`${err.message} ❌❌`);-+
        throw err;
    }
};

export const loadSearchRecipe=async function(query){
try{
    debugger
    state.search.query=query;
const GetSearchResult=await getjson(`${Api_Url}?search=${query}&key=${ForkifyApiToken}`)
const result=await GetSearchResult;
state.search.result=result.data.recipes.map(ele => {
    return{
        id:ele.id,
        title:ele.title,
        publisher:ele.publisher,
        image:ele.image_url,
        ...(ele.key && {key:ele.key})
    };
}
)
state.search.page=1;

}
catch(err){
throw err;
}
}


export const GetSearchResultpage=function(page=state.search.page){
    state.search.page=page;
   const start=(page-1)*state.search.resultsperpage;
   const end=page*state.search.resultsperpage;
    return state.search.result.slice(start,end);
}
export const updateservings=function(servings){
    state.recipe.ingredients.forEach(ing => {
        ing.quantity=(ing.quantity* servings) /state.recipe.servings;
    });
    state.recipe.servings=servings;
}

export const bookmarkrecipe=function (recipe){
debugger
state.bookmark.push(recipe);
if(recipe.id===state.recipe.id) state.recipe.bookmarked=true;
persistbookmark();

}

export const deletebookmark=function (id) {
    const index=state.bookmark.findIndex(el => el.id==id);
    state.bookmark.splice(index,1);
    if(id===state.recipe.id) state.recipe.bookmarked=false;
    persistbookmark();

}

const persistbookmark=function(){
    localStorage.setItem('bookmarks',JSON.stringify(state.bookmark))
}
const init=function (){
const storage=localStorage.getItem('bookmarks');
if(storage) state.bookmark=JSON.parse(storage);
}
init();

const clearbookmarks=function(){
    localStorage.clear('bookmarks');
}
//clearbookmarks();

export const uploadrecipe=async function(newrecipe){
    try{ 

    const ingredients=newrecipe
    .filter(ele => ele[0].startsWith('ingredient') && ele[1] !== '')
    .map(curele => {
        const ingridentarr = curele[1].split(',').map(item => item.trim());
        
        if (ingridentarr.length !== 3) {
            throw new Error('Wrong ingredient format, Please use correct format');
        }

        const [quantity, unit, description] = ingridentarr;
        return { quantity: quantity ? +quantity : null, unit, description };
    });
    debugger;
    newrecipe=Object.fromEntries(newrecipe)
    const Userrecipe={
        //recipe.id,
        
      title:newrecipe.title,
      publisher:newrecipe.publisher,
      source_url:newrecipe.sourceUrl,
      image_url :newrecipe.image,
      servings:+newrecipe.servings,
      cooking_time :+newrecipe.cookingTime,
      ingredients,
    }
    const data=await sendjson(`${Api_Url}?key=${ForkifyApiToken}`,Userrecipe)
    state.recipe=createrecipeobj(data);
    bookmarkrecipe(state.recipe);
    }
    catch(err){
       throw err;
    }
}

