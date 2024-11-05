class SearchView{
_parentelement=document.querySelector('.search');
_clear(){
    this._parentelement.innerHTML='';
}
getQuery(){
    return this._parentelement.querySelector('.search__field').value;
    
}

addhandlerSearch(handler){
    
    this._parentelement.addEventListener('submit',function(e){
        e.preventDefault();
        handler();
    });


}
}

export default new SearchView();