import React,{useState , useEffect} from 'react';
import { getCookie, setBoxGrid } from '../otherSpecialMethods';
import  { Redirect}from 'react-router-dom';

import './viewprofile.css';
import { getStatus, setBox } from './viewScores';


export default function ViewProfile(props) {
    const [username , setUsername] = useState(getCookie())
    const [userData , setUserData] = useState({});
    const getProfileData = async() => {
        try {
          const getUsername = await fetch(`/management/api/v1/data/userget/${username}`)
          const getJson = await getUsername.json();
          setUserData(getJson);  
        } catch (error) {
          console.log("Operation did not complete");
        }
    }

    useEffect(() => {
        getProfileData();
        getStatus();
    },[])

    var data = [{columnOne : "Username", columnTwo : userData.username } , 
                 {columnOne : "Password",columnTwo : "********"},
                 {columnOne : "Email",columnTwo : userData.email}]
    
           
    return (
        <div className="viewProfileMainDiv">
            <div className="profileIcon"> 
                <i className="fas fa-id-badge piconSize"></i>
                <h3> Your profile </h3>
            </div>   
            <div className="profileTable">
               {data.map((value, index)=> {
                   return (
                       <div> 
                           <div style={setBoxGrid(true)}><h3>{value.columnOne}</h3></div> 
                             <div style={setBoxGrid(true)}><h3>{value.columnTwo}</h3></div> 
                             <div style={setBoxGrid(true)}>
                                  <h3 className="changeButton">  Change</h3>  
                            </div> 
                       </div>
                   )
               })}
            </div> 
            <h5>Note : Changing profile details is not available at the moment. Please contact the customer service 
                if you need to modify something </h5>
            <div  className="footerClass" >
                <h3 className="changeButton" style={{width:"100px"}}
                    onClick = {() => {window.location.href="/gameboard"}}
                >Back</h3>   
            </div> 
            
        
        </div>
    )
}
