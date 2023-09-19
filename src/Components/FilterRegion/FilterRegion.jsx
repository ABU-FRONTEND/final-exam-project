import { Component } from "react";
import '../SearchComp/SearchComp.scss'

let regionFilter = [
   {
      id: 0,
      region: 'All'
   },
   {
      id: 1,
      region: 'Africa'
   },
   {
      id: 2,
      region: 'America'
   },
   {
      id: 3,
      region: 'Asia'
   },
   {
      id: 4,
      region: 'Europe'
   },
   {
      id: 5,
      region: 'Oceania'
   }
]

class Filter extends Component{
   render(){
      let {showAll} = this.props
      let filter = regionFilter.map((item) => {
            let { region } = item
            return   < li onClick={(e) => showAll(e)}> { region }</li> })
   
      return(
         <ul className="ul">
            {filter}
         </ul>
      )
   }
}
export default Filter