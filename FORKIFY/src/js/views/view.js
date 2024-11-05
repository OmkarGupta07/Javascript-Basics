import icons from '../../img/icons.svg';

export default class View{
    _data;
    _errormessage;
    _success;

    render(data,render=true){


      if(!data || (Array.isArray(data) && data.length===0 ) )  
            return this.ErrorHandling();
      this._errormessage='Not able to find recipe please find another one 😊';
      this._success='We found Your Recipe 😊';
      this._data=data;
      const markup=this._generatemarkup();
    if(!render) return markup;
    
        this._clear();
        this._parentelement.insertAdjacentHTML('afterbegin',markup);
    }
    _clear(){
        this._parentelement.innerHTML='';
    }
    addhandler(handler){
      let events=['hashchange','load'];
events.forEach(ele => window.addEventListener(ele,handler));
    }
    ErrorHandling(message=this._errormessage){
      const rendringerror=`<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
          this._clear();
          this._parentelement.insertAdjacentHTML('afterbegin',rendringerror);
    }
    SuccessMessage(message=this._success){
    const rendersuccess=`   <div class="message">
                    <div>
                      <svg>
                        <use href="${icons}#icon-smile"></use>
                      </svg>
                    </div>
                    <p>
                    ${message}
                    </p>
                  </div>`;


          this._clear();
          this._parentelement.insertAdjacentHTML('afterbegin',rendersuccess);
    }
    Loader=function(){
        const htmlloader=`<div class="spinner">
                <svg>
                  <use href="${icons}#icon-loader"></use>
                </svg>
              </div>`;
                this._parentelement.innerHTML='';
                this._parentelement.insertAdjacentHTML('afterbegin',htmlloader);
      }


      _update(data){
       
      try{
        this._data=data;
        const updatehtml=this._generatemarkup();
        const newdow=document.createRange().createContextualFragment(updatehtml);
        const newele= Array.from(newdow.querySelectorAll('*'));
        const curelements=Array.from(this._parentelement.querySelectorAll('*'));

        console.log(newele,curelements);
        newele.forEach((ele,i) =>{
          const curele=curelements[i];
          //console.log(curele,ele.isEqualNode(curele));
         
          if(!ele.isEqualNode(curele) &&  ele.firstChild && ele.firstChild.nodeValue.trim() !== ''){
           console.log(ele.firstChild.nodeValue.trim());
            curele.textContent=ele.textContent;
          
        }
          if(!ele.isEqualNode(curele)){
              Array.from(ele.attributes).forEach(attr => curele.setAttribute(attr.name,attr.value));
          }
        })
      }
      catch(err){
        console.log(err);
      }
    }
 


}