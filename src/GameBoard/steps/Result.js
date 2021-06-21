import React from 'react';
import './result.css'
import Cookies from 'universal-cookie';
import { getRealScore } from './SpecialMethods';
import { getCookie, happyOrSad } from './OtherSpecialMethods';
import {motion} from 'framer-motion';



function Result(props) {
   /** console.log("We are in the result method now")
    const cookie = new Cookies(); **/
  // var score = props.hasStopped ? props.currentScore : props.submittedScore;
    var score =  getRealScore(props.submittedScore);
    var username = getCookie();
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

            <motion.i className={happyOrSad(score)}
                      initial = {{opacity : 0 , x : -100}}
                      animate = {{opacity: 1, x : 0}}
                      transition = {{duration : 2}}
            ></motion.i>
            <motion.div
                 initial = {{opacity : 0 , x : 100}}
                 animate = {{opacity: 1, x : 0}}
                 transition = {{duration : 2, delay: 2}}
            >
            <h1>After you accepted the challenge and accepted to answer the questions you finally won {score} $
            </h1>
            {score > 0 ? <p>Congratulations we are so happy for your victory we are so happy that you accepted the challenge
                and you won this amount  </p> : 
                
                <p>We are so sorry that you have not won in our tournament but we are delighted that you partcipated</p>}
            </motion.div>
            
            
        </div>
    )
}

export default Result
/** 
 Content-Type" : "application/json
 */