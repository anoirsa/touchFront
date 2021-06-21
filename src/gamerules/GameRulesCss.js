import {motion}from 'framer-motion';
import styled from 'styled-components';

const Section = styled.div`
display: flex;
flex-direction: column;
color: #ffffff;
gap: 6rem;
height: 125vw;
width: 100%;


`;


const Container = styled.div`
height: 30%;
justify-self: center;
align-self: center;
padding: 0.5rem;
h2 {
    font-size: 3rem;
    font-weight: 400;
    
}


`;
const Image = styled(motion.img)`
width: 100%;
height: 100%;
max-width: 500px;
max-height: 500px;
margin-bottom: 0.4rem;


`;


const SecondContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem;
width: 100%;
height:30%;

`;

const QuoteBox = styled(motion.div)`
border : 0.3rem solid black;
background: #ffff;
color: black;
height:100%;
width: 70%;
justify-self: center;
align-self: center;
position: relative;
right: 7%;
border-radius: 5%;
display:grid;
grid-template-columns: 2fr 3fr;
padding: 0.2rem;

`;

const CharacterImage = styled.img`
height: 85%;
width: 100%;
align-self: center;
`;

const QuoteText = styled.div`
text-align: center;
align-self: center;
font-weight: 600;
font-size: 1.5rem;

`;




// Array
const data = [
    {number : "I" , text :"Sign in after registration", direction :"left"},
    {number : "II" , text :"Answer the questions and get money", direction: "right"},
    {number : "III" ,text : "You have three tools of help" ,direction:"left"},
    {number : "IV" ,text : "You can stop at anytime" ,direction:"right"},
    {number : "V" ,text : "1000 $, 32000 $ are two stop points" ,direction:"left"},
    {number : "VI" ,text : "Earn the money based on points" ,direction:"right"},
]

export {Section, Container, Image, QuoteBox, CharacterImage, QuoteText, SecondContainer, data}