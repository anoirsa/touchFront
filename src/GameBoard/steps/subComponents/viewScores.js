import React , {useState , useEffect}from 'react'
import styled from 'styled-components'; 
import Button from '@material-ui/core/Button';
import {motion} from 'framer-motion';
import  { Redirect}from 'react-router-dom';

import {Link} from 'react-router-dom'
import  {evaluateScore, getDatedFormat}from '../SpecialMethods.js'
import './viewscore.css'
import { getCookie, getGobal } from '../otherSpecialMethods.js';



const setBox = (widthValue,borderAdd) => {
    let returnedArray = {display : "flex", flexDirection: "column" , justifyContent : "center" , alignItems :"center", width: widthValue, height:"100%"};
    if (borderAdd) returnedArray.borderRight = "0.5px solid #ffffff";
    return returnedArray;
}

const getStatus =  () => {
    fetch(`/management/api/v1/coners`).then(res => console.log(res.status)).catch(err => {
        console.log("there is an error")
        window.location.href="http://localhost:3000"
    })
  
  } 

  



function ViewScores(props) {
    // To be modified
    const username = getCookie();
    const [scores , setScores] = useState([])
    
    
    const goBack = () => {
        window.location.href = "/gameboard";
    }

    
    
    var starsTop = [];
    var delayValueTop = 0.6;
    for (let i = 0 ; i <5 ; i++) {
      starsTop.push(<motion.i
                 initial = {{opacity : 0}}
                 animate = {{opacity : 1}}
               transition ={{duration : 1, delay : delayValueTop}}
        className="fas fa-star-half-alt starsTop"> </motion.i>)  
        delayValueTop += 0.6
    } 
    var startsBottom = [];
    var delayValue = 0.5;
    for (let i = 0 ; i <7 ; i++) {

        startsBottom.push(<motion.i 
                    initial = {{opacity : 0}}
                    animate = {{opacity : 1}}
                    transition ={{duration : 1, delay : delayValue}}
            className="fas fa-star startsBottom"> </motion.i>)  
            delayValue += 0.5;
      } 
      const getScores = async() => {
        try {
            const res = await fetch(`/api/v1/user_and_scores/${username}`)
            console.log(res)
            const getData = await res.json()
            setScores(getData)
            console.log(getData)
        }
    
        catch(error) {
    
        }
       
    }
    

       useEffect(() => {
        getScores();
        getStatus();
        
    },[])
    //props.get();
    return (
        <div className="viewScoreClass">
            <div className="topStarSection">
            {starsTop}
            </div>
            <motion.h1
                 initial = {{opacity : 0}}
                 animate = {{opacity : 1}}
                 transition ={{duration : 2, delay : delayValue + 1}}
            >Your top scores.</motion.h1>
            <div className="bottomSection topStarSection">
            {startsBottom}
            </div>
            <motion.div className="underStars"
                initial = {{opacity : 0 , x : -100}}
                animate = {{opacity : 1, x : 0}}
                transition ={{duration : 2, delay : delayValue + 2}}
            >
                <div className="userD" >
               <i className="fas fa-user-tie"></i> <h1>Admin</h1>
            </div>
            <div className="tableClass">
                <div className="rowClass"> 
                    <div style={setBox("30%",false)}><h3>Score </h3></div>
                    <div style={setBox("30%",false)}><h3>Evaluation</h3></div>
                    <div style={setBox("20%",false)}><h3>Day</h3></div>
                    <div style={setBox("20%",false)}><h3>Comment</h3></div>
                </div>
                {scores.map((value , index) => {
                    return (
                        <div className="rowClass" style={ index % 2 == 0 ? {background : "#dfdddd"} : null}> 
                    <div style={setBox("30%",true)}><h3>{value.scorePoints} $ </h3></div>
                    <div style={setBox("30%",true)}><h3>{evaluateScore(value.scorePoints)}</h3></div>
                    <div style={setBox("20%",true)}><h3>{getDatedFormat(value.scoreDate)}</h3></div>
                    <div style={setBox("20%",true)}><h3>To be added</h3></div>
                        </div>
                    )
                })}
               
            </div>

            </motion.div>
            <div className="footerClass">
                    <div className="backButton" style={setBox("30%",false)} 
                        onClick = {() => goBack()}
                    ><h3>Back</h3></div>
                </div>
                
        </div>
    )
  
}
// fas fa-star-half-alt
// fas fa-star
export default ViewScores

export {setBox, getStatus}