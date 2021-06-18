import React from 'react'
import styled from 'styled-components'; 
import { BackGround } from '../../../home/subComponents/RegistrationModal';
import  Consultant from '../images/consultantW.png'
import Button from '@material-ui/core/Button';


const ModalWrapper = styled.div`
    width: 800px;
    height: 550px;
    background: #ffff;
    color: #000;
   // display: grid;
   // grid-template-columns: 1fr 1fr;
    position: relative;
    z-index : 12;
    border-radius: 10px;
    padding: 5px;
    h1 {
        font-weight: 300;
    }
    h2 {
        font-weight: 300;
    }
    `


const ConsultantImage = styled.img`
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 350px;
`;
function AskConsultant({consultantModal, handleConsultant, consultantOpinion}) {
   
    return <>  
    {consultantModal ? (<BackGround>
        <ModalWrapper consultantModal={consultantModal}  >
        <h1>Consultant opinion</h1>
        <ConsultantImage 
            src={Consultant}
        />
        <h2>I suggest that correct answer is {consultantOpinion}</h2>
        <Button
              color="primary"
              variant="contained"
              onClick = {() => handleConsultant()} 
            
         >Continue</Button>
       </ModalWrapper>
    </BackGround>) : null}
    </>
}

export default AskConsultant;
