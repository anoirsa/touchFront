import styled from 'styled-components'; 
import TextField from '@material-ui/core/TextField';
import PasswordField from 'material-ui-password-field';
import Button from '@material-ui/core/Button';
//import {useAlert } from 'react-alert'
import React , {useState , useEffect} from 'react';



const sf = ["Registration was done successfully , A link valid for 15 minutes is sent to your email, please check your inbox",
            "Registration request failed"]

const BackGround = styled.div`
    width: 100%;
    height: 100%;
    background:transparent;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 12;
`;

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    background: #ffff;
    color: #000;
   // display: grid;
   // grid-template-columns: 1fr 1fr;
    position: relative;
    z-index : 12;
    border-radius: 10px;
    padding: 5px;
    //text-align: center;
    .success {
        position: relative;
        top : 50%;
        text-align: center;
        font-size: 20px;

    }
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

    .bot {
        margin-top: 10px;
        width: 50%;
        align-self: center;
        margin-bottom: 10px;
        
    }

`;



function RegistrationModal({showRegistrationModal, setRegistrationModal}) {
    const [messageRequest, setMessageRequest] = useState(0);
    const [step , setStep] = useState(1);
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");
   // const alert = useAlert();
    console.log(username);
    console.log(password);
    const register = async e => {
        e.preventDefault();
        const body = {username , password , email} 
        const response  = await fetch("api/v1/registration" , {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(body)
        })
        console.log(response);
        const status = await response.status;
        console.log(status);
        if (status == 200) {
            setMessageRequest(0)
            
        }
        else {
            setMessageRequest(1)
        }
        setStep(2);
    } 
    return <>  
      {showRegistrationModal ? (<BackGround>
          <ModalWrapper showRegistrationModal={showRegistrationModal}  >
              {step == 1 ?  <form onSubmit = {register}>
           <TextField
              placeholder="Enter your username"
              label="Username"
              margin="normal"
              name="username"
              onChange = {(e) => setUsername(e.target.value)}
              fullWidth
            />
           <TextField
              placeholder="Enter your email"
              label="Email"
              margin="normal"
              name="email"
              onChange = {(e) => setEmail(e.target.value)}
              fullWidth
            />
             <PasswordField
             hintText="At least 8 characters"
             floatingLabelText="Enter your password"
             errorText="Your password is too short"
             placeholder="Password here"
             name = "password"
             onChange = {(e) => setPassword(e.target.value)}
           // onChange = {e => setPassword(e.target.value)}
            />

         <button    className = "btn btn-primary bot"
           >Register</button>
          <Button
              color="primary"
              variant="contained"

             onClick = {() => setRegistrationModal(prev =>!prev)}
          
             >Go back to login</Button>
         </form>: <div className="success">
            <h4> {sf[messageRequest]}</h4>
             <Button
              color="primary"
              variant="contained"
              onClick = {() => setStep(1)}
          
             >Go back</Button>
              </div> }
         </ModalWrapper>
      </BackGround>) : null}
      </>
  }
 
  
export default RegistrationModal

  /**
   */