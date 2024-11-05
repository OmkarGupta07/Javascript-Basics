import View from "./view";
import icons from '../../img/icons.svg';
import PreviewView from './PreviewView.js'


class ResultView extends View{
    
    _parentelement=document.querySelector('.results');
    _errormessage='Not able to find recipe please find another one 😊';

  
      _generatemarkup(){
        return this._data.map(result => PreviewView.render(result,false)).join('');       
      }       

}

export default new ResultView();