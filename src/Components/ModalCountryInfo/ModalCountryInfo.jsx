import { Component } from "react";
import './ModalCountryInfo.scss'
import close from '../../assets/img/close.png'
class ModalCountryInfo extends Component{
   render(){
      const { hide, countrysList, item} = this.props
      let arr = countrysList?.filter(el => el?.name?.common == item) 
      let renderHtml = arr?.map(elem => {
         const { capital, region, subregion, tld,  currencies, name, flags, borders, population, languages} = elem
         console.log(borders);
         let str = ""
         let lan = ""
         let nat = ""
         let topLevelDomain = ''
         for (let key in languages) {
            lan = languages[key]
         }

         for (let key in currencies) {
            str = currencies[key]?.name
         }

         for (let key in name?.nativeName) {
            nat = name?.nativeName[key].common
         }
         return (
            <div className="modal_body">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" onClick={() => hide()}>
                  <rect x="1.41187" y="0.00012207" width="31.9446" height="1.99654" transform="rotate(45 1.41187 0.00012207)" />
                  <rect y="22.5883" width="31.9446" height="1.99654" transform="rotate(-45 0 22.5883)" />
               </svg>
               <div className="country_modal_info">
                  <div className="country_image">
                     <img src={flags.png} alt="country flag" />
                  </div>
                  <div className="country_info">
                     <div className="modal_country_name">
                        <h2>{elem?.name?.common}</h2>
                     </div>
                     <ul>
                        <div className="global_info">
                        <li><span>Native Name:</span> {nat}</li>
                        <li><span>Population:</span> {population.toLocaleString('en-US')}</li>
                        <li><span>Region:</span> {region}</li>
                        <li><span>Sub Region:</span> {subregion}</li>
                           {capital.length !== 0 ? <li><span>Capital:</span> {capital}</li> : null}
                        </div>
                        <div className="personal_info">
                           <li><span>Top Level Domain:</span> {tld.join(', ')}</li>
                           <li><span>Currencies:</span> {str}</li>
                           <li><span>Languages:</span> {lan}</li>
                        </div>
                     </ul>
                     {borders.length > 0 ? <div className="borders">
                        <p>Border Countries:</p>
                        <div className="borders_name">
                           {
                              borders.map((border) => {
                                 return <div className="border_name">{border}</div>
                              })
                           }
                        </div>
                     </div> : null}
                  </div>
               </div>
            </div>
         )
      })
      return(
         <>
            <div className="modal">
               {renderHtml}
            </div>
         </>
      )
   }
}
export default ModalCountryInfo