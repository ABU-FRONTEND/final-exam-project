import { Component } from "react";
import Header from "../Header/Header";
import SearchComp from "../SearchComp/SearchComp";
import CardList from "../CardList/CardList";
import ModalCountryInfo from "../ModalCountryInfo/ModalCountryInfo";
class App extends Component{
   state = {
      countrysList: null, 
      item: null,
      country: null,
      countryRegion: null,
      pagenation: 8
   }
   showModal = (value) => {
      this.setState(() => {
         return {
            item: value
         }
      })
      this.show()
   }
   showAll = (e) => {
      this.setState({ pagenation: 8 })
      let filterHeader = document.querySelector('h3')
      let ulFilter = document.querySelector('.ul')
      if (e.target.innerText !== 'All') {
         fetch(`https://restcountries.com/v3.1/region/${e.target.innerText}`)
            .then(data => data.json())
            .then((data) => {
               this.setState((prevState) => {
                  return {
                     countryRegion: data,
                     countrys: prevState.countrysList = data,
                     filter: filterHeader.innerText = e.target.innerText,
                     header: ulFilter.classList.remove('active')
                     
                  }
               })
               this.pagenation(data)
            })
      }
      else {
         this.componentDidMount()
         ulFilter.classList.remove('active')
         filterHeader.innerText = e.target.innerText
      }
   }
   componentDidMount() {
      fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,population,nativeName,borders,subregion,tld,languages")
         .then(res => res.json())
         .then(data => this.setState({
            country: data
         }))
      fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,population')
         .then((url) => {
            return url.json()
         })
         .then((data) => {
            this.setState({countryRegion: data })
            this.pagenation(data)
         })

   }
   searchCountry = (e) => {
      let value = e.target.value
      const {countryRegion} = this.state
      let data = countryRegion.filter(item => {
         const {name} = item
         const {common} = name
         if(common.toLowerCase().includes(value.toLowerCase())){
            return item
         }
      })
      this.pagenation(data)
      this.setState({ countrysList : data})
   }

   hide = () => {
      let modal = document.querySelector('.modal')
      modal.style.display = 'none'
   }
   
   show = () => {
      let modal = document.querySelector('.modal')
      modal.style.display = 'flex'
   }
   countryButton = () => {
      const { countryRegion } = this.state
      this.pagenation(countryRegion)
   }
   pagenation = (data) => {
      const {pagenation} = this.state
      let country = []
      for(let i = 0; i < pagenation; i++){
         country.push(data[i])
      }
      this.setState({ countrysList: country, pagenation: pagenation+8})
   }
   render(){
      const {countrysList, country, item} = this.state
      return (
         <>
         <Header />
         <main>
               <SearchComp searchCountry={this.searchCountry} showAll={this.showAll} />
               <CardList pagenationButton={this.countryButton} countrysList={countrysList} show={this.showModal} />
               <ModalCountryInfo hide={this.hide}countrysList={country} item={item} />
         </main>
         </>
      )
   }
}
export default App