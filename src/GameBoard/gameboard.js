import React from 'react'
import './gameboard.css';
import { getRes } from './client'
import  {Route , Redirect}from 'react-router-dom';
import BeforeStart from './steps/BeforeStart';
import DuringGame from './steps/DuringGame';
import  Result  from './steps/result';
import GameWithdraw from './steps/GameWithdraw';
import {equals, getTextLevel, pointStable} from './steps/SpecialMethods'
import { questionsOfTheGame } from './steps/questionData';

class Gameboard extends React.Component {
constructor(props){
   super(props);
    this.state = {
        step : 1,
        level : null,
        questions : [],
        currentScore : 0,
        submittedScore : 0
        
    }
    this.forwardStep = this.forwardStep.bind(this);
    this.backStep = this.backStep.bind(this);
    this.handleLevel = this.handleLevel.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.upScore = this.upScore.bind(this);
    
}
    upScore () {
        const {currentScore, submittedScore} = this.state
        this.setState(prevState => {
            return {currentScore : prevState.currentScore + 1}
        })
        const newSubmitted = pointStable(submittedScore,currentScore)
       
        this.setState({
            submittedScore : newSubmitted
        })

    }
    forwardStep() {
    this.setState(prevState => {
        return {step : prevState.step + 1}
    })
    console.log(this.state.step)
   }
   
   removeTwo() {

   }
   async renderQuestions() {
        const {level} = this.state
        if (level != null) {
            try {
                /** 
                const questionsOfTheGame = [
                    {questionText : "Who is best player",
                    option1 : "Messi",
                    option2: "Ronaldo",
                    option3 : "Rahim",
                    option4 : "Gori",
                    correctAnswer : "Messi"},
                
                    {questionText : "Who is world cup winner 2010",
                    option1 : "Spain",
                    option2: "Italy",
                    option3 : "Germany",
                    option4 : "Netherlands",
                    correctAnswer : "Spain"},

                    {questionText : "How many times did Finalnd qualify to EURO ?",
                    option1 : "2 times",
                    option2: "One time",
                    option3 : "4 times",
                    option4 : "6 times",
                    correctAnswer : "One time"}

                ]; **/
                // ${getTextLevel(level)}
               /**const res = await fetch(`http://localhost:8081/management/api/v1/data/${getTextLevel(level)}`);
                const json = await res.json(); **/
                
               /** json.map((item , index) => {
                    return(
                        questionsOfTheGame.push(item)
                    )
                }) **/
                this.forwardStep();
                console.log("Step next is " + this.state.step)
                this.setState({
                    questions : questionsOfTheGame
                })
                console.log(this.state.questions)
                
               
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
   
        console.log("Main step is " + step)
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
            break;
            
        case 2 :
            return <DuringGame 
                    questions = {this.state.questions}
                    forwardStep = {this.forwardStep}
                    step = {step}
                    upScore = {this.upScore}
                    currentScore = {this.state.currentScore}
            />
            
        case 3:
            return <Result 
                currentScore = {this.state.currentScore}
                submittedScore = {this.state.submittedScore}
            />   
            break;
        
        case 4 : 
            return <GameWithdraw  />
            break;
    }
 

}
}

export default Gameboard
