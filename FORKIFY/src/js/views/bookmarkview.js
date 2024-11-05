import View from "./view.js";
import PreviewView from "./PreviewView";
import icons from '../../img/icons.svg';

class BookmarkView extends View{
    _parentelement=document.querySelector('.bookmarks__list');
    _errormessage='No Bookmarks Found.Find a nice recipe and bookmark it.';

    addhandlerrenderbookmark(handler){
        window.addEventListener('load',handler);
    }
    _generatemarkup(){
        return this._data.map(result => PreviewView.render(result,false)).join('');       
      }    
}

export default new BookmarkView();