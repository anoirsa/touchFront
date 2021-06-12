import React , {useState , useEffect} from 'react';
import styled from 'styled-components'; 
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import tryComponents
import {FormControl, Input} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PasswordField from 'material-ui-password-field'
import Alert from '@material-ui/lab/Alert';
// import images
import WelcomeAnime from './subImages/welcomeAnime.png'
import { sendLoginRequest } from './client';
import Cookies from 'universal-cookie';
import { makeStyles } from '@material-ui/core/styles';





const BackGround = styled.div`
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    background: #ffff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index : 10;
    border-radius: 10px;
    p{
        font-size: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
    }

    div {
        display: flex;
        flex-direction: column;
        padding: 10px;
        align-items: center;
        justify-content: space-around;
    }
`;

const ImageM = styled.img`
    width: 100%;
    height: 60%;
    border-radius: 5%;
    margin-bottom: 20px;
`;

/** 
const makeLoginRequest = (event) =>{
    event.preventDefault();
    var details = {
        'username' : "sada",
        'password' : "sads"
    }

    var formBody = [];
 for (var property in details) {
 var encodedKey = encodeURIComponent(property);
 var encodedValue = encodeURIComponent(details[property]);
 formBody.push(encodedKey + "=" + encodedValue);
 }
 formBody = formBody.join("&");

    /** sendLoginRequest(formBody).then(res => {
        console.log("The response from the login request is : ")
        console.log(res)
    })
    
} **/

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  

function Modal({showModal, setShowModal}) {
  /** 
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");  **/
    const cookies = new Cookies();
    const classes = useStyles();
   // cookies.remove("login")
    const cancel = () => {
        setShowModal(prev =>!prev)
        cookies.remove("login")
    }

    /** 
    const [showRegistrationModal , setRegistrationModal  ] = useState(false);
    const openRegistrationModal = () => {
        setRegistrationModal(prev => !prev)
    } **/
    
   return <>  
    {showModal ? (<BackGround>
        <ModalWrapper showModal={showModal}  >
            <div>
      
            <h3>Touch AND GO</h3>
            <ImageM  src = {WelcomeAnime}/>
            <Button
              color="primary"
              variant="contained"
            //  onClick = {() => setShowModal(prev =>!prev)}
            onClick = {() => cancel()}
             >Cancel</Button>
            </div>
            <form method="POST" action="http://localhost:8081/login"
            > <TextField
              placeholder="Enter Your username"
              label="Username"
              margin="normal"
              name="username"
             // onChange = {e => setUsername(e.target.value)}
              fullWidth
            />
            <br />
           
           <PasswordField
           hintText="At least 8 characters"
           floatingLabelText="Enter your password"
           errorText="Your password is too short"
           placeholder="Password here"
           name = "password"
           // onChange = {e => setPassword(e.target.value)}
           
           />
          
            <br />
            <button
           
             className = "btn btn-primary"
             >LOG IN</button>
             <hr />
            <a>Here we are</a>
             
             {cookies.get("login") =="error" ?   <Alert variant="filled" severity="error" style={{width:"300px", height:"70px"}}>
             There is a login error!
              </Alert> : null}
            
             
             </form>
        </ModalWrapper>
    </BackGround>) : null}
    </>
}

export default Modal

