import React from 'react'
import './gameboard.css';
import { getRes } from './client'
import  {Route , Redirect}from 'react-router-dom';
import BeforeStart from './steps/BeforeStart';
import DuringGame from './steps/DuringGame';
import { Result } from 'antd';
import GameWithdraw from './steps/GameWithdraw';
import {getTextLevel} from './steps/SpecialMethods'

class Gameboard extends React.Component {
constructor(props){
   super(props);
    this.state = {
        step : 1,
        level : null,
        questions : []
        
    }
    this.forwardStep = this.forwardStep.bind(this);
    this.backStep = this.backStep.bind(this);
    this.handleLevel = this.handleLevel.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    
}
    async renderQuestions() {
        const {level} = this.state
        if (level != null) {
            try {
                const res = await fetch(`http://localhost:8081/management/api/v1/data/${getTextLevel(level)}`);
                const json = await res.json();
                console.log(json);
                this.setState({
                    questions : json
                })

                this.forwardStep();
               
              } catch (err) {
                console.error('err', err);
              }

        }
        
    }

   forwardStep(){
    this.setState({
        step : this.state + 1
    })
   }
    backStep() {
        this.setState({
            step : this.state -1
        })
    }
    handleLevel(levelEntered){
    this.setState({
        level : levelEntered
    })
}
render() {
    const {step, level} = this.state
   
  
        switch(step) {
        case 1 : 
            return <BeforeStart 
                    handleLevel = {this.handleLevel}
                    renderQuestions = {this.renderQuestions}
                    level = {level}
                    isLoggedIn = {this.props.isLoggedIn}
                    handleLogin = {this.props.handleLogin}
                    logout = {this.props.logout}
                    //isLoggedIn = {this.props.location.state.isLoggedIn}
                   /** handleLogin = {this.props.location.state.handleLogin}   **/ />
            break;
        case 2 :
            return <DuringGame  />
            break;
        case 3 :
            return <Result />   
            break;
        
        case 4 : 
            return <GameWithdraw  />
            break;
    }
 

}
}

export default Gameboard
