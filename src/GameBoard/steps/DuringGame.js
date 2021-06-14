import React, {useState, useEffect}from 'react'
import '../gameboard.css'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import SamUncle from './images/asking.png';
import './during.css'
import {insertOptions, shuffle} from './SpecialMethods'
 

class DuringGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterQ : 0,
            questions : this.props.questions,
            currentChosenOption : "",
            answerKnwon : false,
        
        }
        this.chooseOption = this.chooseOption.bind(this)
        this.goAhead = this.goAhead.bind(this)
    }    

chooseOption(option) {
        this.setState({
            currentChosenOption : option
        }) 
        /** 
       this.setState((prevState) =>{
           if(correctAnswer == prevState.currentChosenOption) return {isAnswerCorrect : true}
           else return {isAnswerCorrect : false}
       }) **/
}
goAhead(correctAnswer) {
    setTimeout(() => {

        this.setState((prevState) => {
           return {answerKnwon : true}
        })
    },2000)
}

render(){
    console.log(this.state.counterQ)
    const currentQuestion = this.state.questions[this.state.counterQ]
    var correctAnswer = currentQuestion.correctAnswer;
    var questionText = currentQuestion.questionText
    var optionsAll = insertOptions(currentQuestion);

    return (
        <div className="duringGame">
            
            <motion.i
                className="fas fa-globe-europe newslogan"
                 initial  = {{opacity : 0, x : -100}}
                 animate = {{opacity : 1 , x : 0}}
                 transition = {{duration : 1.5}} 

            ></motion.i> 
            
        <QuestionBox 
            options = {optionsAll}
            chooseOption = {this.chooseOption}
            correctAnswer = {correctAnswer}
            questionText = {questionText}
            counterQ = {this.state.counterQ}
            currentChosenOption = {this.state.currentChosenOption}
            answerKnwon = {this.state.answerKnwon}
            goAhead = {this.goAhead}

        />
        <div className="lastDiv"> 
            <div className="go">
                <div>STOP</div>
                <div>CURRENT CODE</div>
            </div>
            <div className="help">
                <div>REMOVE 2</div>
                <div>STATISTICS</div>
                <div>FRIEND</div>
            </div>
        </div>
        </div>
    )
} 
}


class QuestionBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newPr : null
        }
    }
 
   
    render() {
   // const randmisedOption = shuffle(this.props.options);
    return (
        <div className="questionBox">
            <div className="questionTextBox">
                <i className="fas fa-baseball-ball"></i>
                <h1>{this.props.questionText}</h1> 
                <i className="fas fa-baseball-ball"></i>
                
            </div>
            <div className ="questionOptions">
            
             {this.props.options.map((item, index) => {
                 return(
                     this.props.counterQ % 2 == 0 ?   <div className={this.props.answerKnwon && item == this.props.correctAnswer 
                        ? 'option rightChosen' :item == this.props.currentChosenOption ? 'option optionChosen' : 'option'} key= {index}
                     onClick = {() => this.props.chooseOption(item)}>
                     <motion.h3
                         initial={{opacity: 0}}
                         animate={{opacity:1}}
                         transition={{duration:4}}
                         
                     >{item}</motion.h3>
                           </div> :  <div className={this.props.answerKnwon && item == this.props.correctAnswer
                            ? 'option rightChosen' :item == this.props.currentChosenOption ? 'option optionChosen' : 'option'}
                     onClick = {() => this.props.chooseOption(item)}>
                     <motion.h3
                         initial={{opacity: 0}}
                         animate={{opacity:1}}
                         transition={{duration:4}}
                         
                     >{item}</motion.h3>
                           </div>)
             })}
            </div>
            <div className="goIcon"
                onClick = {() => this.props.goAhead(this.props.correctAnswer)}
            >
            <i className="fas fa-fingerprint"
              
            > </i>
            <h3>Go</h3>

            </div>

           

    </div>
        )

    }
}





export default DuringGame
