import { PresetColorTypes } from 'antd/lib/_util/colors';
import React from 'react';
import { Redirect } from 'react-router-dom';
import '../gameboard.css';



function BeforeStart(props) {
    const styledChosenDiv = {backgroundColor :"white", color:"black"}
    
    
    return (
        <div className ="gameBoardPage beforeStart">
            <div className="questionFirst"> <i className="fas fa-level-up-alt"
                    st></i> <h1>Choose the difficuly of the questions ? </h1>
                     </div>

            <div className="difficultyLevel"> 
               {divData.map((item , index)=> {
                   return (
                   <div  key={index}
                         onClick={() => props.handleLevel(item.level)}
                         style = {props.level == item.level ? styledChosenDiv : null}
                         >
                   <i className={item.cname}></i>
               <h3>{item.text}</h3>

               </div> )
               })}
            </div>  
            <div className="touchIcon">
            <i className="fas fa-fingerprint"
               onClick = {() => props.renderQuestions()}
            > </i>
            <h3>Touch from the top ! </h3>

            </div>
            <div className="here">
                <div 
                    onClick = {() => props.logout()}
                >
                <i className="fas fa-sign-out-alt"></i>
                <h3>LOG OUT</h3>
                </div>
                <div>
                <i className="fas fa-eye"></i>
                <h3>SCORES</h3>
                </div>
                <div>
                <i className="fas fa-id-card"></i>
                <h3>PROFILE</h3>

                </div>
                </div>
             {/**   {props.isLoggedIn ? <Redirect to="/" /> : null} */} 
        </div>
        
    )
}
const divData = [
    {
        cname : "fas fa-balance-scale-right inconLevel",
        level : 1,
        text:"Easy"
    },
    {
        cname : "fas fa-balance-scale inconLevel",
        level : 2,
        text:"Medium"
    },
    {
        cname : "fas fa-balance-scale-left inconLevel",
        level : 3,
        text:"Difficult"
    }
]



export default BeforeStart


/** 
  <div
                    onClick = {() => props.handleLevel(1)}
                >
                    <i className="fas fa-balance-scale-right inconLevel"></i>
                    <h3>Easy</h3>

                </div>
                <div>
                <i className="fas fa-balance-scale inconLevel"></i>
                    <h3>Medium</h3>

                </div>
                <div>
                <i className="fas fa-balance-scale-left inconLevel"></i>
                    <h3>Difficult</h3>

                </div>
 */
