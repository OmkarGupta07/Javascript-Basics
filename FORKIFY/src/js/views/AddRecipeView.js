import View from "./view";
import icons from '../../img/icons.svg';


class AddRecipeView extends View{
    
    _parentelement=document.querySelector('.upload');
    _windowelement=document.querySelector('.add-recipe-window');
    _overlay=document.querySelector('.overlay');
    _btnopen=document.querySelector('.nav__btn--add-recipe');
    _btnclose=document.querySelector('.btn--close-modal');
    _message="Recipe was successfully uploaded";
   // _errormessage='Not able to find recipe please find another one 😊';

constructor(){
    super();
    this._addhandlereecipe();
    this._addhandlerhide();
}

togglewindow(){
    this._overlay.classList.toggle('hidden');
    this._windowelement.classList.toggle('hidden');
}

  _addhandlereecipe(){
       this._btnopen.addEventListener('click',this.togglewindow.bind(this));
  }

  _addhandlerhide(){
    this._btnclose.addEventListener('click',this.togglewindow.bind(this));
    this._overlay.addEventListener('click',this.togglewindow.bind(this));
  }

  _addhandleruploads(handler){
    this._parentelement.addEventListener('submit',function(e){
        e.preventDefault();
        const formdata=[...new FormData(this)];
        const dataobj=Object.fromEntries(formdata);
        console.log(dataobj);
        handler(formdata);
    })
  }

      _generatemarkup(){
        return this._data.map(result => PreviewView.render(result,false)).join('');       
      }       

}

export default new AddRecipeView();