import React from 'react'
import './gameboard.css';
import { getRes } from './client'
import  {Route , Redirect}from 'react-router-dom';
import BeforeStart from './steps/BeforeStart';
import DuringGame from './steps/DuringGame';
import  Result  from './steps/Result';
import GameWithdraw from './steps/GameWithdraw';
import {equals, getTextLevel, pointStable} from './steps/SpecialMethods'
//import { questionsOfTheGame } from './steps/questionData';
import { getStatus } from './steps/subComponents/ViewScores';

class Gameboard extends React.Component {
constructor(props){
   super(props);
    this.state = {
        step : 1,
        level : null,
        questions : [],
        currentScore : 0,
        submittedScore : 0,
        hasStopped : false
        
    }
    this.forwardStep = this.forwardStep.bind(this);
    this.backStep = this.backStep.bind(this);
    this.handleLevel = this.handleLevel.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.upScore = this.upScore.bind(this);
    this.setWithdraw = this.setWithdraw.bind(this)
    
}

    // Logic
    setWithdraw() {
        this.setState({
            hasStopped : true,
            submittedScore : this.state.currentScore
        })  
    this.forwardStep();
    }

    // Logic

    upScore () {
        const {currentScore, submittedScore} = this.state
        this.setState(prevState => {
            return {currentScore : prevState.currentScore + 1}
        })
        console.log("Other validation " + currentScore)
        const newSubmitted = pointStable(submittedScore,currentScore)
       
        this.setState({
            submittedScore : newSubmitted
        })
        if (currentScore == 16) {
            this.forwardStep();
        }

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
                   

                ]; 
                // ${getTextLevel(level)}
                const res = await fetch(`http://localhost:8081/management/api/v1/data/${getTextLevel(level)}`);
                const json = await res.json();
                
               json.map((item , index) => {
                    return(
                        questionsOfTheGame.push(item)
                    )
                }) 
                this.setState({
                    questions : questionsOfTheGame
                });
                this.forwardStep();
                console.log("Step next is " + this.state.step)
                
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
    
        getStatus();
        const {step, level} = this.state
       // this.props.get();
        console.log("Main step is " + step)
        switch(step) {
        case 1 : 
            return <BeforeStart 
                    handleLevel = {this.handleLevel}
                    renderQuestions = {this.renderQuestions}
                    level = {level}
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
                    setWithdraw = {this.setWithdraw}
            /> 
           
            
            
        case 3:
            return <Result 
                username = "admin"
                currentScore = {this.state.currentScore}
                submittedScore = {this.state.submittedScore}
                hasStopped = {this.hasStopped}

            />   
            break;
        
        case 4 : 
            return <GameWithdraw  />
            break;
    }
 

}
}

export default Gameboard
