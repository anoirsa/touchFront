import React from 'react';
import './result.css'
import Cookies from 'universal-cookie';


function Result(props) {
   /** console.log("We are in the result method now")
    const cookie = new Cookies(); **/
    console.log("The entered username is " + props.currentScore)
    console.log("Submitted score is " + props.submittedScore)
    return (
        <div className="resultClass">
            <h1>Game has ended and your scoe is </h1>
        </div>
    )
}

export default Result
