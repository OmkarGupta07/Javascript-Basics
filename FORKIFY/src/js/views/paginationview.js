import View from "./view";
import icons from '../../img/icons.svg';

class PaginationView extends View{
    _parentelement=document.querySelector('.pagination');


    _addhandlerpagination(handle){
        this._parentelement.addEventListener('click',function(e){
            const btn=e.target.closest('.btn--inline');
            const gotopage=btn.dataset.goto;
            console.log(btn);
           //console.log(gotopage);
            handle(gotopage);

        })

    }
    _generatemarkup(){
        const numpages=Math.ceil(this._data.result.length/this._data.resultsperpage);
        console.log(numpages);
        if(Number(this._data.page)===1 && numpages>1){
            return `<button data-goto="${Number(this._data.page)+1}" class="btn--inline pagination__btn--next">
             <span>Page ${Number(this._data.page)+1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
          `;   
        }

        if(Number(this._data.page)==numpages  && Number(numpages)>1){
            return `<button data-goto="${Number(this._data.page)-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${Number(this._data.page)-1}</span>
          </button>
          `;
}

        if(Number(this._data.page)<numpages){
            return `
            <button data-goto="${Number(this._data.page)-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._data.page-1}</span>
      </button>
      <button  data-goto="${Number(this._data.page)+1}" class="btn--inline pagination__btn--next">
             <span>Page ${Number(this._data.page)+1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
        }

        return '';
    }
}


export default new PaginationView();