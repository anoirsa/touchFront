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

    forwardStep() {
    this.setState(prevState => {
        return {step : prevState.step + 1}
    })
    console.log(this.state.step)
   }
    async renderQuestions() {
        const {level} = this.state
        if (level != null) {
            try {
                const questionsOfTheGame = [
                    {questionText : "Who is best player",
                    option1 : "Messi",
                    option2: "Ronaldo",
                    option3 : "Rahim",
                    option4 : "Gori"},
                
                    {questionText : "Who is world cup winner 2010",
                    option1 : "Spain",
                    option2: "Italy",
                    option3 : "Germany",
                    option4 : "Netherlands"},
                    {questionText : "How many times did Finalnd qualify to EURO ?",
                    option1 : "2 times",
                    option2: "One Time",
                    option3 : "4 times",
                    option4 : "6 times"}

                ];
                // ${getTextLevel(level)}
                const res = await fetch(`http://localhost:8081/management/api/v1/data/${getTextLevel(level)}`);
                const json = await res.json();
                
               /** json.map((item , index) => {
                    return(
                        questionsOfTheGame.push(item)
                    )
                }) **/
                this.setState({
                    questions : questionsOfTheGame
                })
                this.forwardStep();
               
              } catch (err) {
                console.error('err', err);
              }

        }
        
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
                   />

            
        case 2 :
            return <DuringGame 
                    questions = {this.state.questions}
            />
            
        case 3 :
            return <Result />   
            
        
        case 4 : 
            return <GameWithdraw  />
            
    }
 

}
}

export default Gameboard
