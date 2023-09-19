import { Component } from "react";
import './CardList.scss'
import CardListItem from "../CardListItem/CardlistItem";
class CardList extends Component{
   
   render(){
      const { countrysList, show, pagenationButton } = this.props
      return (
         <>
            <div className="container">
               <div className="cards">
                  {
                     countrysList && countrysList?.map((item) => {
                        const { name, capital, flags, region, population } = item
                        return <CardListItem name={name.common} capital={capital} flags={flags.png} show={show} region={region} population={population.toLocaleString('en-US')} />
                     })
                  }
               </div>
               <button onClick={pagenationButton}>Show Country</button>
            </div>
         </>
      )
   }
}
export default CardList