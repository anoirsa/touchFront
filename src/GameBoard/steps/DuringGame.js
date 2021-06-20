import React, {useState, useEffect}from 'react'
import '../gameboard.css'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import SamUncle from './images/asking.png';
import './during.css'
import {getRealScore, insertOptions, points, shuffle, removeA, isStable, getIconCategory} from './SpecialMethods'
import SelectInput from '@material-ui/core/Select/SelectInput';
import Percentage from './subComponents/percentage';
import AskConsultant from './subComponents/askConsultant';

class DuringGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterQ : 0,
            questions : this.props.questions,
            currentChosenOption : "",
            answerKnwon : false,
            answerIsWrong : false,
            optionsUsed : {
                removeTwo : false,
                consultant : false,
                statistics : false,
            },
            removedoptions : [],
            percentages : [],
            percentageModal : false,
            consultantModal : false,
            consultantOpinion : ""

    }
        this.chooseOption = this.chooseOption.bind(this)
        this.goAhead = this.goAhead.bind(this)
        this.removeTwo = this.removeTwo.bind(this)
        this.handlePercentage = this.handlePercentage.bind(this)
        this.openPercentage = this.openPercentage.bind(this)
        this.getPercentage = this.getPercentage.bind(this)
        this.showConsultantOption = this.showConsultantOption.bind(this)
        this.openConsultant = this.openConsultant.bind(this)
        this.handleConsultant = this.handleConsultant.bind(this)

    }   
    
    
    
showConsultantOption(correctAnswer , options ) {
        var ourOptionVars = options;
        const {removedoptions} = this.state
        if (removedoptions.length != 0 ) {
            ourOptionVars = options.filter((value) => {
                return !removedoptions.includes(value)
            })
          }
          
          var percentage = Math.floor(Math.random() * 99) + 1;
          if (percentage > 15){
            this.setState({
                consultantOpinion : correctAnswer
            })
          }
            
          else {
            var wrongO;
            do {
              wrongO = Math.floor(Math.random() * (ourOptionVars.length)) + 0;
              console.log(wrongO)
            } while(ourOptionVars[wrongO] == correctAnswer)
            this.setState({
                consultantOpinion : ourOptionVars[wrongO]
            })
          }
          this.openConsultant();
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
// get percentage method

// For consultant
openConsultant() {
    if (this.state.optionsUsed.statistics == false) this.handleConsultant();
}

handleConsultant() {
    this.setState((prev) => {
        return {consultantModal : !prev.consultantModal}
    })
    this.setState({
        optionsUsed : {
            ... this.state.optionsUsed,
            consultant : true
        }
    })
}
// For consultant


openPercentage() {
    if (this.state.optionsUsed.statistics == false) this.handlePercentage();
}

handlePercentage() {
    this.setState((prev) => {
        return {percentageModal : !prev.percentageModal}
    })
    this.setState({
        optionsUsed : {
            ... this.state.optionsUsed,
            statistics : true
        }
    })
}

getPercentage(correctAnswer , options){
    const {removedoptions} = this.state
    var ourOptionVars = options;
    var ourPercentages = [];
    var returnedArray = [];
    if (removedoptions.length != 0 ) {
      ourOptionVars = options.filter((value) => {
          return !removedoptions.includes(value)
      })
    }
    
    var full = 100;
    for (let i = 0 ; i< ourOptionVars.length ; i++) {
        // Test
        if (i == (ourOptionVars.length - 1)) ourPercentages.push(full);
      
        else {
            var tempValue = full - Math.floor(Math.random() * 99) + 1
            var counter = 0;
            while (tempValue < 0 ) {
              tempValue = full - (Math.floor(Math.random() * 99) + 1)
              if (counter > 10) {
                tempValue = 0;
                // To prevent timeout
                break;
              }
              counter ++;
            }
            ourPercentages.push(tempValue)
            full = full - tempValue
            
            } 
        }
    var heighestPrecentage = Math.max(...ourPercentages);
    if (heighestPrecentage == 50 && ourOptionVars.length == 2) {
       ourOptionVars.forEach((value) => {
         returnedArray.push({
          option : value,
          percentage : 50
        })
       })
    }
    else {
        removeA(ourPercentages,heighestPrecentage);
        removeA(ourOptionVars, correctAnswer);
        returnedArray.push({
          option : correctAnswer,
          percentage : heighestPrecentage
        })
      for (let i = 0 ; i< ourPercentages.length ; i ++ ){
        returnedArray.push({
          option : ourOptionVars[i],
          percentage : ourPercentages[i]
         })
      }
      
    }
    //Logic to be implemented
    this.setState({
        percentages : returnedArray
    })
    this.openPercentage();
    // Logic to be implemented

   // return returnedArray;
}
// Fucntions 



//
removeTwo(correctAnswer , options) {
    if (!this.state.optionsUsed.removeTwo) {
     var optionsRemove = 0;
    var arrayOfOpRemoved = []
    while (optionsRemove < 2 ){
        var suggestedIndex = Math.floor(Math.random() * 3) + 1;
        var suggested = options[suggestedIndex];
        if (!arrayOfOpRemoved.includes(suggested) && correctAnswer != suggested ){
            arrayOfOpRemoved.push(suggested);
            optionsRemove++;
        }
       
    }
    this.setState({
        optionsUsed : {
            ...this.state.optionsUsed ,
            removeTwo : true
        },
        removedoptions : arrayOfOpRemoved
    })
    }
    else console.log("Do nothing")
}

// possibility to make it import : ++
sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
goAhead(correctAnswer) {

    if (this.state.answerIsWrong) {
        this.props.forwardStep();
    }
    else  {
      if  (correctAnswer != this.state.currentChosenOption) {
        setTimeout(() => {
            this.setState((prevState) => {
                   return {answerKnwon : true,
                          answerIsWrong : true}
                })
            },2000)
    }
    else if (correctAnswer == this.state.currentChosenOption) {
        this.sleep(2000)
        this.props.upScore()
        this.setState((prevState) => {
            return {counterQ : prevState.counterQ +1,
                    removedoptions : [],
                      }
        })
    }   
}
}

render(){
    console.log(this.state.counterQ)
    const currentQuestion = this.state.questions[this.state.counterQ]
    var correctAnswer = currentQuestion.correctAnswer;
    var category = currentQuestion.category;
    var questionText = currentQuestion.questionText
    var optionsAll = insertOptions(currentQuestion);
   
    return (
        <div className="duringGame">
            <AskConsultant 
                consultantModal = {this.state.consultantModal}
                handleConsultant = {this.handleConsultant}
                consultantOpinion = {this.state.consultantOpinion}
            />
            <Percentage 
           percentageModal = {this.state.percentageModal} 
           handlePercentageModal = {this.handlePercentage}
           optionsAvailable = {this.state.percentages}
        />
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
            removedoptions = {this.state.removedoptions}
            category = {category}

        />
        <div className="scoreLine">
            {points().map((item, index) => {
                return (
                    <div className={item == this.props.currentScore ? 
                    "sectionLine currentLine" : isStable(item) ? "sectionLine stableScore"
                     : "sectionLine"} key={index}> 
                            <p>{getRealScore(item)} $</p>
                    </div>
                )
            })}
        </div>
        <div className="lastDiv"> 
            <div className="go">
                <div 
                   onClick = {() => this.props.setWithdraw()}
                >STOP</div>
                <div>CURRENT CODE</div>
            </div>
            <div className="help">
                <div
                    onClick = {() => this.removeTwo(correctAnswer , optionsAll)}
                    className = {this.state.optionsUsed.removeTwo ? "removeTwoAlreadyUsed" : null}
                >REMOVE 2</div>
                <div
                    onClick = {() => this.getPercentage(correctAnswer , optionsAll)}
                    className = {this.state.optionsUsed.statistics ? "removeTwoAlreadyUsed" : null}
                >STATISTICS</div>
                <div
                    className = {this.state.optionsUsed.consultant ? "removeTwoAlreadyUsed" : null}
                    onClick = {() => this.showConsultantOption(correctAnswer, optionsAll)}
                >Consultant</div>
            </div>
            
        </div>
        
        </div>
    )
} 
}


   
    
function QuestionBox(props) {
   //console.log("answe is knwon ?" + this.props.answerKnwon)
    return (
        <div className="questionBox">
            <div className="questionTextBox">
                <i className={getIconCategory(props.category)}></i>
                <h1>{props.questionText}</h1> 
                <i className={getIconCategory(props.category)}></i>
                
            </div>
            <div className ="questionOptions">
            
             {props.options.map((item, index) => {
                 var miniItem = item;
                 if (props.removedoptions.size != 0) {
                     miniItem = props.removedoptions.includes(item) ? "" : item;
                 }
                 return(
                     props.counterQ % 2 == 0 ?   <div className={props.answerKnwon == true && (item == props.correctAnswer) 
                        ? 'option rightChosen' :item == props.currentChosenOption ? 'option optionChosen' : 'option'}  key= {index}
                     onClick = {() => props.chooseOption(item)}>
                     <motion.h3
                         initial={{opacity: 0}}
                         animate={{opacity:1}}
                         transition={{duration:4}}
                         
                     >{miniItem}</motion.h3>
                           </div> :  <div className={props.answerKnwon == true && (item == props.correctAnswer) 
                        ? 'option rightChosen' :item == props.currentChosenOption ? 'option optionChosen' : 'option'}
                     onClick = {() => props.chooseOption(item)}>
                     <motion.h3
                         initial={{opacity: 0}}
                         animate={{opacity:1}}
                         transition={{duration:4}}
                         
                     >{miniItem}</motion.h3>
                           </div>)
             })}
            </div>
            <div className="goIcon"
                onClick = {() => props.goAhead(props.correctAnswer)}
            >
            <i className="fas fa-fingerprint"
              
            > </i>
            <h3>Go</h3>

            </div>

           

    </div>
        )

    }






export default DuringGame


// previous code 
/**
  <div className={item == this.props.currentScore ? 
                    "sectionLine currentLine" : "sectionLine"} key={index}> 
                            <p>{getRealScore(item)} $</p>
                    </div>
 */