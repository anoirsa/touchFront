import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/nabvar';
import  React, { useEffect } from 'react'
import HomePage from './home/homePage'
// import components
import Main from './home/Main';
import Footer from './home/subComponents/Footer'
import GameRules from './gamerules/GameRules';
import {BrowserRouter as Router , Route, Switch , Redirect} from 'react-router-dom'
import AboutUs from './About Us/AboutUs';
import ContactUs from './contactus/ContactUs';
import Gameboard from './GameBoard/gameboard';
import errorPage from './GameBoard/errorPage';
import Cookies from 'universal-cookie';
import { data } from './gamerules/GameRulesCss';
import fetch from 'unfetch'
import { getdata } from './home/subComponents/client';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn : false
    }
    this.get = this.get.bind(this)
    this.handleLogin = this.handleLogin.bind(this);

  }
  

  handleLogin(json) {
    if (json == "log") {
      this.setState({
        isLoggedIn : true
      })
    } else{
      this.setState({
        isLoggedIn : false
      })
    }
  }
   
  
  async logout() {
    /**  const res = await fetch(`logout`);
    console.log(res)
    this.handleLogin("sa");  **/
    window.location.href ="http://localhost:8081/logout";
  }

  async get() {
    try {
      const res = await fetch(`management/api/v1/coners`);
      
      console.log(res)
      const json = await res.text();
      console.log(json)
      this.handleLogin(json)
    } catch (err) {
      console.error('err', err);
    }
  
  }

  

  componentDidMount() {
    this.get();
  }

  render(){

    return(
      <div className="App">
      <Router>
      <NavBar /> 
        
      <Switch>
      <Route path="/"  render = {(props) => (
     <Main   {...props} isLoggedIn = {this.state.isLoggedIn} 
                        handleLogin={this.handleLogin}
                        handleLogOut={this.handleLogOut}
                        get = {this.get}/>
   )}   exact />
   
   <Route path="/gamerules" component={GameRules} exact />
   <Route path="/aboutus" component={AboutUs} exact/>
   <Route path="/conatactus"  component={ContactUs} exact/>

   <Route path ="/gameboard" render = {(props) => (
     <Gameboard   {...props} isLoggedIn = {this.state.isLoggedIn} 
                        handleLogin={this.handleLogin}
                        logout ={this.logout}
                      />
   )} exact />
   <Route path ="/errorpage" component ={errorPage} exact />
   </Switch>       
   {this.state.isLoggedIn ? <Redirect to="/gameboard" /> : null} 
    
    </Router>
    <Footer />  
    </div>

    )
  }
}
export default App;
