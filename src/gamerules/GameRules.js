import React ,{useState , useEffect}from 'react'
import './gamerulesOrigin.css'
import {motion}from 'framer-motion';
import styled from 'styled-components';
// import images 
import Bird from './images/bird.png'
import MangaBoy from './images/mangaboy.png'
// Import components
import {Section, Container, Image,
    QuoteText, CharacterImage, QuoteBox, SecondContainer, data} from './gameRulesCss'




const GameRules = () => {

   
    const [showQuote, setShowQuote] = useState(false);

    const ThirdContainer = styled.div`
    width: 100%;
    height: 30%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20rem;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap : 2rem;

    .left {
        background: #ffffff;
        border-radius: 5%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        justify-content: start;
        color: black;
    }

    .right {
        background: #ffffff;
        border-radius: 5%;
        display: grid;
        grid-template-columns: 2fr 4fr;
        justify-content: start;
        color: black;

    }
    div {
        background: #ffffff;
        border-radius: 5%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        justify-content: start;
        color: black;

    }
     `;

    useEffect(() => {
        const handleScroll = () => {
             const yPos = window.scrollY;
            console.log(yPos)
            setShowQuote(yPos > 220? true : false);
            
        }
            
        window.addEventListener('scroll' , handleScroll, false)
        return () => {
            window.removeEventListener('scroll' , handleScroll, false);
        }
        
    },[])

    return (
        <Section>
         <Container>
               <Image 
               src = {MangaBoy}
               alt ="Kid" 
               variants={{
                hidden : {opacity :0,x : -300},
                visible : {opacity : 1 , x :-30}
            }}
            initial = 'hidden'
            animate = 'visible'
            transition = {{duration:4}}
               />

         <motion.h2
            initial = {{opacity : 0}}
            animate = {{opacity : 1}}
            transition = {{duration:6}}
         >How to play ?
             </motion.h2>      
               
         </Container> 

          <SecondContainer>
         <QuoteBox
         animate={{opacity: showQuote ? 1 : 0}}
         initial = {{opacity: 0,transitionDuration:2}}
         transition = {{duration :3}}
         >
         <CharacterImage 
            src = {Bird}
            alt ="birdFlying"
         />

         <QuoteText>
            <p>“.....
                This affliction is what makes me smarter. This disadvantage is what gives me my ambition.”</p>
                <div>
                 <i className="fas fa-quote-right"></i> 
                 <p className="whoSaid">Garrard Conley</p>
                </div>
         </QuoteText>
             
        </QuoteBox>   
        </SecondContainer>
         <ThirdContainer>
         {data.map((item, index) => {
                 var left = item.direction == "left" ? true : false
                 return left ?  <motion.div
                 initial ={{opacity :0.5,x:"-70%"}}
                 whileHover={{opacity :1 , scale:1.1,x:0,transition:{duration:1}}}
                 className="left"
             ><div className="toShowIt"><p>{item.text}</p></div>  
                      <div className="showIt">
                      <i className="fas fa-file-signature"> </i>
             <h3>{item.number}</h3> </div>
                      </motion.div> :  <motion.div
            initial ={{opacity :0.5,x:"70%"}}
            whileHover={{opacity :1 , scale:1.1,x:0,transition:{duration:1}}}
            className="right">
               <div className="showItRight">
                 
             <h3>{item.number}</h3> 
                 <i className="fas fa-file-signature"> </i></div>
             <div className="toShowItRight"><p>{item.text}</p></div>  
                 
                 </motion.div>
             })}    
    
             </ThirdContainer>   
        
     </Section>
    )
}





export default GameRules
