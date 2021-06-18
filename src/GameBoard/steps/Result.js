import React from 'react';
import './result.css'
import Cookies from 'universal-cookie';
import { getRealScore } from './SpecialMethods';


function Result(props) {
   /** console.log("We are in the result method now")
    const cookie = new Cookies(); **/
  // var score = props.hasStopped ? props.currentScore : props.submittedScore;
    var score =  getRealScore(props.submittedScore);
    var username = "admin";
    const addScore  = async() => {
        
        const body = {username, score}
        const res = await fetch('api/v1/user_and_scores', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(body)
        })
        console.log(res)
        const status =  await res.status
        console.log(status);
    }
    addScore();
    return (
        <div className="resultClass">

            <i className="fas fa-smile-beam"></i>
            <h1>After you accepted the challenge and answered so many questions correctly you finally won {score} $
            </h1>
            {score > 0 ? <p>Congratulations we are so happy for your victory we are so happy that you accepted the challenge
                and you won this amount  </p> : 
                
                <p>We are so sorry that you have not won in our tournament but we are delighted that you partcipated</p>}
            
            
            
        </div>
    )
}

export default Result
/** 
 Content-Type" : "application/json
 */