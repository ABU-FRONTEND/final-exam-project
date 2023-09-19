import { Component } from "react";
import './SearchComp.scss'
import search from '../../assets/img/search.svg'
import Filter from "../FilterRegion/FilterRegion";
class SearchComp extends Component{
   show(){
      let ul = document.querySelector('.filter_region ul')
      ul.classList.toggle('active')
   }
   render(){
      const { searchCountry, showAll } = this.props
      return (
         <div className="container">
            <div className="search_comp">
               <div className="search_inp">
                  <img src={search} alt="search icon" />
                  <input type="text" placeholder="Search for a country…" onInput={(e) => searchCountry(e)}/>
               </div>
               <div className="filter_region">
                  <div className="filder_header" onClick={this.show}>
                        <h3>Filter by region</h3>
                        <div className="arrow_img" >
                           <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z" />
                           </svg>
                        </div>
                     </div>
                  <Filter showAll={showAll}/>
               </div>
            </div>
         </div>
      )
   }
}
export default SearchComp