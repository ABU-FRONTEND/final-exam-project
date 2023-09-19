import { Component } from "react";
import './CardListItem.scss'
import flag from '../../assets/img/1280px-Flag_of_Germany.svg.png'
class CardListItem extends Component{
   render(){
      let { name, capital, flags, region, population, show } = this.props
      return(
         <div className="card" onClick={() => show(name)}>
            <img src={flags} alt="flag"  />
            <ul>
               <li className="country_name">{name}</li>
               <li><strong>Population:</strong> {population}</li>
               <li><strong>Region:</strong> {region}</li>
               {capital.length === 0 ? null : <li><strong>Capital:</strong> {capital}</li> }
            </ul>
         </div>
      )
   }
}
export default CardListItem