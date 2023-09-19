import { Component } from "react";
import darkMode from '../../assets/img/dark_mode.png'
import lightMode from '../../assets/img/light_mode.png'
import './Header.scss'
class Header extends Component{
   state = {
      active:false
   }
   show = () =>{
      let body = document.querySelector('body')
      this.setState((prevState)=>{
         return {
            active: prevState.active = true,
            body: body.classList.add('active')
         }
      })
   }
   light = () => {
      let body = document.querySelector('body')
      this.setState((prevState) =>{
         return {
            light: prevState.active = false,
            body: body.classList.remove('active')
         }
      })
   }
   render(){
      const {active} = this.state
return(
   <header>
      <div className="header_content container">
         <h1>Where in the world?</h1>
         <div className={`modes ${active ? 'active' : ''}`}>
            <div className="dark_mode" onClick={this.show}>
               <img src={darkMode} alt="darkmode" />
               Dark Mode
            </div>
            <div className="light_mode" onClick={this.light}>
               <img src={lightMode} alt="darkmode" />
               Light Mode
            </div>
         </div>
      </div>
   </header>
)
   }
}
export default Header