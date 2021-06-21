import {motion}from 'framer-motion';
import styled from 'styled-components';


const IntroductionDiv = styled.div`
padding: 1rem;
width: 100%;
height:80vw;
color: #ffff;
// border: 0.2rem solid #fff;
//text-align: center;
display: flex;
flex-direction: column;
gap: 40px;
justify-content: center;

h1 {
   align-self: center;
   font-size: 4rem;
   font-weight: 200;

}

`;
const Image =  styled(motion.div)`
width: 50%;
height:50% ;
align-self: center;
border-radius: 2%;
background-color:#ffff;
padding: 5px;
img {
    width:100%;
    height: 100%;
}

`;

const Description = styled(motion.div)`
//  margin-top: 2px;
height: 40vw;
width: 100;
display: flex;
//margin-left: 25%;
//margin-right: 22%;
flex-direction: column;
padding: 10px;
//background-color: white;
`
const Titles = styled(motion.div)`
display : grid;
align-self: center;
width: 70%;
height: 30%;
grid-template-columns: repeat(3 , 1fr);
// background-color: #ffff;
color: white;
gap: 20px;
border-radius: 2%;
div {
  text-align: center;
}
h3 {
  font-weight: 500;
  margin-top : 28%;
  font-size: 25px;
}`
const Box = styled(motion.div)`
height: 70%;
width: 100%;
padding: 2px;
// background-color:blue;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const Container = styled.div`
width:48%;
height: 100%;
//background-color: red;
overflow-y: hidden;
overflow-x: hidden;
padding-left:15px;
padding-right: 15px;
color:#ffff;


h1{
text-align: center;
font-weight:500;
}
p {
   font-size: 20px;
   line-height: 50px;
   text-indent: 5em;
   hyphens: auto;
   //overflow-wrap:break-word;
   //word-break: break-all;
}
`;
const BorderContainer = styled.div`
width:0%;
height:50%;
// background-color: red;
border-left: 0.1rem solid #ffff;
border-right: 0.1rem solid #ffff;
`;

export {IntroductionDiv, Image, Description, Titles, Box, Container, BorderContainer}

