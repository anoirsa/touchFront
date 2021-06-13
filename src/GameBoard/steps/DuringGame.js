import React, {useState, useEffect}from 'react'
import '../gameboard.css'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import SamUncle from './images/asking.png';
import './during.css'
import {shuffle} from './SpecialMethods'
 



function DuringGame(props) {
    const [counterQ, setCounterQ] = useState(0);
    const [questions, setQuestions] = useState(props.questions)
    const [currenQuestion , setCurrentQuestion] = useState(questions[counterQ])
    const [options, setOptions] = useState([currenQuestion.option1, currenQuestion.option2,currenQuestion.option3,currenQuestion.option4])
    
    return (
        <div className="duringGame">
            
            <motion.i
                className="fas fa-globe-europe newslogan"
                 initial  = {{opacity : 0, x : -100}}
                 animate = {{opacity : 1 , x : 0}}
                 transition = {{duration : 1.5}} 

            ></motion.i> 
        <QuestionBox 
            options = {options}
            setCounterQ = {setCounterQ}
            counterQ = {counterQ}
            currenQuestion = {currenQuestion}
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

function QuestionBox(props) {
    const correctAnswer = props.options[0];
    const opts = shuffle(props.options); 
    const isAnswerRight = (chosen) => {
        if (chosen == correctAnswer) {
            props.setCounterQ(props.counterQ + 1)
        }
        console.log(props.counterQ)
    }   

    return (
        <div className="questionBox">
            <div className="questionTextBox">
                <i className="fas fa-baseball-ball"></i>
                    <h1>{props.currenQuestion.questionText}</h1> 
                <i className="fas fa-baseball-ball"></i>
                
            </div>
            <div className ="questionOptions">
             <div className="option"
                onClick={() => isAnswerRight(opts[0])}>
                     <h3>{opts[0]}</h3>
                      </div>

              <div className="option"
                 onClick={() => isAnswerRight(opts[1])}
              > <h3>{opts[1]}</h3> </div>

              <div className="option" 
                    onClick={() => isAnswerRight(opts[2])}> <h3>{opts[2]}</h3> </div>
                <div className="option"
                    onClick={() => isAnswerRight(opts[3])}
                > <h3>{opts[3]}</h3> </div> 
            </div>

            <div className="goIcon">
            <i className="fas fa-fingerprint"
              
            > </i>
            <h3>Go</h3>

            </div>

           

    </div>
        )
}


export default DuringGame
