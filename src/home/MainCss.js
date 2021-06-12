import React from 'react'
import {motion} from 'framer-motion';
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components';

// this class is a shortcut to reduce the CSS variables in the main classes

// Images 

const Image = styled(motion.img)`
position : relative;
top:100px;
width : 100%;
height : 100%;
max-width : 250px;
max-height : 250px;
border-radius : 40%;

`;

const Image1 = styled(motion.img)`
position : relative;
top:100px;
width: 350px;
height: 450px;
border-radius : 40%;

`;

const Section = styled.div`
background:#131313;
height : 120vw;
width: 100%;
display: flex;
flex-direction: column;
gap:20px;

`;

const Container = styled.div`
width: 100%;
display:grid;
grid-template-columns : 25% 50% 25%;
color : white;
padding : 3rem;
`;

const FirstColumn = styled.div`
justify-self : left;
display : flex;
flex-direction : column;
justify-content:center;
align-items : center;

`;

const SecondColumn = styled.div`
justify-self :center;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-top:8rem;

h1 {
  font-size: 2rem;
  margin-bottom:0.5rem;
}
p {
  font-size : 4rem;
  margin-bottom : 0.3rem;
  line-height: 1.1;
}

`;

const ThirdColumn = styled.div`
justify-self : right;
display : flex;
flex-direction :column;
justify-content:center;
align-items : center;
`;


const Button = styled(motion.div)`
padding : 2rem;
border : 2px solid #fff;
border-radius : 4px;
margin-top:1.3rem;
cursor: pointer;
`;

const ContainerSecond = styled(motion.div)`
        padding: 12rem;
        display: flex;
        flex-direction: column;
        gap: 10px;
        height:80vw;
        
       
    `;

    const Reference = styled(motion.div)`
        width: 100%;
        height: 40%;
       // border-bottom: 2px solid #fff ;
        //border-bottom: 2px solid #fff ;
        border-radius: 0.2rem;
        display: flex;
        justify-content: center;
       // grid-template-columns: 1fr 1fr;
       // grid-template-areas : 
       // "a a a a";
    `;
   const SectionAbove = styled.div`
        //grid-area: a;
        //border-bottom: 5px solid #fff;
        display: flex;
        justify-content:space-between;
        padding:1rem;
        
       `;

   const SubSection = styled(motion.div)`
            width: 50%;
            text-align: center;
            align-content: center;
            padding:2rem;
            color:#fff;
            border-radius: 0.5rem;
           
           

            h2{
            vertical-align: middle;
           // position: relative;
         //   top: 35%;
            font-size: 2rem;
           }
           h2 i {
               margin-right: 1rem;
               font-size: 2rem;
           }
   `

const Text = styled(motion.div)`
        padding: 4rem;
       // border: 2px solid #ffff;
        height:50%;
        background: #ffff;
        color:black;
        font-size: 1.5rem;
        text-align: center;
        border-radius: 2.5%;
        
    `;
    const ImageSherlock = styled(motion.img)`
        height: 100%;
        width: 100%;
        max-width: 150px;
        max-height: 150px;
    `;


const GlobalStyle = createGlobalStyle`
  * {
   box-sizing : border-box;
   margin : 0;
   padding: 0;
   font-family: 'Arial', sans-serif;
  }
`;

export {Image , Image1, Section ,Container ,FirstColumn ,SecondColumn, ThirdColumn,Button,
  ContainerSecond, Reference ,SectionAbove, SubSection, Text, ImageSherlock, GlobalStyle }