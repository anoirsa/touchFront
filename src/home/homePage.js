import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import QuestionMark from './images/questionMark.svg';
import BoyAsking from './images/boyAsking.svg'
//import GirlAsking from './images/girlAsking.svg';

const Section = styled.section`
    height:150wh;
    background:#131313;
    
`;

const Container = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    height: 100vh;
    padding : 3rem 3rem;

`;

const ColumnLeft = styled.div`
   align-self:center;
   color :#fff;
   display : flex;
   flex-direction:column;
   align-items:flex-start;
   padding : 4rem 4rem;
   
    h1 {
        margin-bottom : 0.7rem;
        font-size: 2rem;

    }

    p {
        margin : 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }

`;

const Button = styled(motion.div)`
    padding : 2rem 1rem;
    font-size : 1.5rem;
    // First argument is for the size , second for the type of the border , third is for the color
    border : 2px solid #fff;
    border-radius : 4px;
    outline:none;
    cursor : pointer;
   

`;

const Image = styled(motion.img)`
    
    position :absolute;
    width : 100%;
    height: 100%;
    max-width : 250px;
    max-height : 250px;
`;


const ColumnRight = styled.div`
    justify-self:right;
    align-self:center;
    display:flex;
    flex-direction : column;
    align-items : center;
    justify-content:center;

    ${Image}:nth-child(1) {
        top :10px;
        right:10px;
    }
    

    ${Image}:nth-child(2) {
        right:10px;
        bottom:10px;
    }
    
`;


const HomePage = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                <motion.h1
                    initial = {{opacity:0}}
                    animate = {{opacity:1}}
                    transition = {{duration:1}}
                >Welcome to space</motion.h1>
                <motion.p
                    variants = {{
                        hidden : {opacity:0 , x:-100},
                        visible : {opacity : 1 , x:0}
                    }}
                    initial ='hidden'
                    animate = 'visible'
                    transition = {{duration : 1}}
                >Journey to the unkwown</motion.p>
                <Button
                    whileHover={{scale:1.05}}
                    whileTap = {{scale:0.95, backgroundColor:'#67F6E7'}}
                    initial = {{opacity:0}}
                    animate = {{opacity :1,transition : {duration:1.5}}}
                  
                >Get Started</Button>
                </ColumnLeft>

                <ColumnRight>
                <Image src={BoyAsking} 
                whileTap = {{scale : 0.9}}
                 alt="questionMark"
                />

                <Image src={BoyAsking} 
                 alt="questionMark"
                 whileTap = {{scale : 0.9}}
                 drag = {true}
                 dragConstraints = {{left : 50, right:50, top:50, bottom:50}}
                />
                </ColumnRight>
            </Container>
        </Section>
    )
};

export default HomePage
