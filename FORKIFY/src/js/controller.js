import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import receipeview from './views/receipeview.js';
import searchview from './views/searchview.js';
import resultview from './views/resultview.js';
import paginationview from './views/paginationview.js';
import bookmarkview from './views/bookmarkview.js';
import AddRecipeView from './views/AddRecipeView.js';
const recipeContainer = document.querySelector('.recipe');

if(module.hot)
  module.hot.accept();


const ShowRecipe=async function(){
  try{
    const id=window.location.hash.slice(1);
 if(!id) return;
  receipeview.Loader();
   // Loader(recipeContainer);

resultview._update(model.GetSearchResultpage());
bookmarkview._update(model.state.bookmark);

    await model.GetRecipe(id);
  //const {recipe}=model.state;
  
receipeview.render(model.state.recipe);
//receipeview._update(model.state.recipe);


  }
  catch(err){
    receipeview.ErrorHandling();
  }
}

const searchResults=async function(){
  try{

    resultview.Loader();

      const query=searchview.getQuery();
      if(!query) return ;

      await model.loadSearchRecipe(query);


      //console.log();
      
      resultview.render(model.GetSearchResultpage());


      paginationview.render(model.state.search);

  }catch(err){
    resultview.ErrorHandling();
  }
}

const paginationconst=function(gotopage){
 try{

  resultview.render(model.GetSearchResultpage(gotopage));
  paginationview.render(model.state.search);
 }
 catch(err){
  console.log(err);
 }

}

const controlservings=function (newservings){
model.updateservings(newservings);
receipeview.render(model.state.recipe);

}

const bookmarkrecipescontroller=function(){
  if(!model.state.recipe.bookmarked)
  model.bookmarkrecipe(model.state.recipe)
else
model.deletebookmark(model.state.recipe.id)

 // console.log(model.state.recipe);
  receipeview._update(model.state.recipe);

  bookmarkview.render(model.state.bookmark);
}

const bookmarksload=function(){
  bookmarkview.render(model.state.bookmark);

}

const Recipe=async function(newrecipe){
  try{
AddRecipeView.Loader();

await model.uploadrecipe(newrecipe);
console.log(model.state.recipe);

receipeview.render(model.state.recipe);

AddRecipeView.SuccessMessage();

bookmarkview.render(model.state.bookmark)

window.history.pushState(null,'',`#${model.state.recipe.id}`)

setTimeout(() => {
  AddRecipeView.togglewindow();
}, 2.5);
}
catch(err){
  //console.log(err);
  AddRecipeView.ErrorHandling(err.message);
}
}

const init=function() {
  bookmarkview.addhandlerrenderbookmark(bookmarksload);
  receipeview.addhandler(ShowRecipe);
  receipeview._addhandlerservings(controlservings);
  receipeview.addhandlerbookmarks(bookmarkrecipescontroller);
  searchview.addhandlerSearch(searchResults);
  paginationview._addhandlerpagination(paginationconst);
  AddRecipeView._addhandleruploads(Recipe);
  //controlservings();
}

init();