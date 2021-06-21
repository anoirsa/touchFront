import React , {useState, useEeffect, useEffect}from 'react'
import {motion}from 'framer-motion';
import styled from 'styled-components';
// Import images
import TeamBusiness from './Images/team.png'
import {IntroductionDiv, Image, Description, Titles, Box, Container, BorderContainer} from './items'



function AboutUs() {

    const [showBox, setShowBox] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
             const yPos = window.scrollY;
            console.log(yPos)
            setShowBox(yPos > 800 ? true : false);
        
        }
            
        window.addEventListener('scroll' , handleScroll, false)
        return () => {
            window.removeEventListener('scroll' , handleScroll, false);
        }
        
    },[])
   
        return (
        <div>

        <IntroductionDiv>

            <motion.h1
             initial = {{opacity:0, y : 50}}
             animate = {{opacity:1 , y : 0}}
             transition = {{duration : 2}}
            > Who are we  ? </motion.h1>
              <Image
            
            initial = {{opacity : 0}}
            animate = {{opacity : 1 }}
            transition = {{duration : 3}}
           >
               <img src  = {TeamBusiness}/>
           </Image>

          </IntroductionDiv>

          <Description >
          <Titles>
              <Element delay ={0} text ="E D U C A T I O N" />
              <Element delay ={2} text ="S O P H I S T I C A T I O N" />
              <Element delay ={4} text ="U N I F I C A T I O N" />
           </Titles>
           <Box
             animate={{opacity: showBox ? 1 : 0}}
             initial = {{opacity: 0}}
             transition = {{duration : 2}}
             >
               <Container > <h1>OUR HISTORY.</h1>
                 {txs}
              </Container>
               <BorderContainer > </BorderContainer>
               <Container > <h1>OUR MISSION.</h1>
               {taxs}
                </Container>
           </Box>
        </Description>
        </div>
    );
}

export default AboutUs;

function Element(props) {
    return (
        <motion.div
        initial = {{opacity : 0}}
        animate = {{opacity:1}}
        transition = {{duration : 2 , delay: props.delay}}
        >
        <h3>{props.text}</h3>
        </motion.div>
    )
}

const txs = <p> <strong>Anouar productions</strong> company was establisbed based in Vaasa  <sub>2021</sub>. The founder Anouar Belila is passionate software developer specialised in 
 <em> full stack applications</em> and more abour building restful APIs. His first products is <bold>Touch AND GO game</bold> We plan to expand our services and be influncial part of the gaming industry.</p>

const taxs = <p>We have the desire to meet all the expectations of new generation of gamers. <strong> Smartb-based games </strong> are in huge demand and we are as the future can be. </p>


