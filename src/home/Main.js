import React ,{useState, useEffect}from 'react'
import {motion} from 'framer-motion';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import {BrowserRouter as Router , Route, Switch , Redirect} from 'react-router-dom'

// import images
import ConfidentMan from './images/confidentMan.svg';
import GirlAsking from './images/GirlAsking.svg';
import Sherlock from './images/sherlockholmes.svg';
import Footer from './subComponents/Footer'

// import styled components
import {Image , Image1,
     Section ,Container ,FirstColumn 
     ,SecondColumn, ThirdColumn,
     Button , ContainerSecond, Reference ,SectionAbove, SubSection,
     ImageSherlock } from './MainCss'
// import variables     
import { texts } from './texts';
// import components
import Modal from './subComponents/Modal'


// Cookies are very important objects to make a secure and smooth connection between the server and the client


const Main = (props) => {
    const [showModal , setShowModal ] = useState(false);
    const cookies = new Cookies();
    if (cookies.get("touchandgo") == "loginpage") {
        setShowModal(true)
    }
    cookies.set('touchandgo' , '123456');
    
    const openModal = () => {
        setShowModal(prev => !prev)
    }
    
    const Text = styled(motion.div)`
        padding: 4rem;
       // border: 2px solid #ffff;
        height:50%;
       background: #ffff;
        color:black;
        font-size: 2rem;
        text-align: center;
        border-radius: 2.5%;
        
    `;
     // const shouldShowReference = true;
    const handleTextReference = (e) => {
        return (
        <motion.p
        initial={{color:"#ffff"}}
        >
        {textReference}
        </motion.p>);
    }
    const [shouldShowText, setShouldShowText] = useState(false)
    const [textReference, setTextReference] = useState(null);
    const [shouldShowReference , setshouldShowReference] = useState(false);
    const handleMouseOver = (params) => (event) => {
        event.preventDefault();
            if (params == 1) {
                setTextReference(texts[0]);
            }
            else {
                setTextReference(texts[1]);
            }
        }  
    
    useEffect(() => {
        const handleScroll = () => {
             const yPos = window.scrollY;
            console.log(yPos)
            setShouldShowText(yPos > 410 ? true : false);
            setshouldShowReference(yPos > 370 ? true : false);
        }
        window.addEventListener('scroll' , handleScroll, false)
        return () => {
            window.removeEventListener('scroll' , handleScroll, false);
        }
        
    },[])

    //props.get();
    return (
        <Section>
            <Container>
            <FirstColumn> 
                <Image 
                    src = {ConfidentMan}
                    alt="Man Confident"
                    initial = {{opacity :0, x:-100}}
                    animate = {{opacity :1, x:0}}
                    transition = {{duration : 1.5}}
                   
                />
             </FirstColumn>
            <SecondColumn >
                <motion.h1
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:1}}
                >Touch AND GO
                </motion.h1>
                <motion.p
                    variants={{
                        hidden : {opacity :0,y : -100},
                        visible : {opacity : 1 , y :0}
                    }}
                    initial = 'hidden'
                    animate = 'visible'
                    transition = {{duration:2}}
                >Discover your vision

                </motion.p>
                <Button
                    whileHover={{scale:1.2}}
                    whileTap={{scale:0.9,backgroundColor:'#adadeb',transition:{duration:0},background:"transparent"}}
                    initial ={{opacity:0}}
                    animate ={{opacity:1, transition:{duration : 1.5}}}
                    onClick = {openModal}
                >Join</Button>
                <Modal  setShowModal = {setShowModal}
                       showModal={showModal}
                    />
                {/** <GlobalStyle />  **/}  
            </SecondColumn>
            <ThirdColumn >
            <Image1
                    initial = {{opacity :0, x:100}}
                    animate = {{opacity :1, x:0}}
                    src = {GirlAsking}
                    alt="Man Confident"
                    transition = {{duration : 1.5}}
           />
                 </ThirdColumn>

            </Container>
            <ContainerSecond>
                <Reference
                animate={{opacity: shouldShowReference ? 1 : 0}}
                initial = {{opacity: 0}}
                transition = {{duration :2}}
                >
                <SectionAbove>
                <SubSection
                    whileHover = {{scale :1.1,backgroundColor:"white",color:"black"}}
                    onMouseOver ={handleMouseOver(1)}
                >
                   <h2><i className="far fa-user"></i>Who can play ?</h2>
                </SubSection>
                <SubSection
                 whileHover ={{scale :1.1,backgroundColor:"#ffff",color:"black"}}
                 onMouseOver ={handleMouseOver(2)}
                >
                <h2><i className="fas fa-gamepad"></i>Why this game ?</h2>
                </SubSection>
                </SectionAbove>
                </Reference>
                <Text
                   animate={{opacity: shouldShowText ? 1 : 0}}
                   initial = {{opacity: 0}}
                   transition = {{duration :2}} 
                >
                <ImageSherlock
                    src={Sherlock}
                    alt="Detective"
                    variants={{
                        hidden : {opacity :0},
                        visible : {opacity : 1 , x :100}
                    }}
                    initial="hidden"
                    animate={{rotate:360 , opacity:1}}
                    transition={{repeat:Infinity, duration:6}}
                >

                </ImageSherlock>
                <motion.p
                    variants={{
                        hidden : {opacity :0,x : -100},
                        visible : {opacity : 1 , x :0}
                    }}
                    initial = 'hidden'
                    animate = "visible"
                    transition = {{duration : 1.5}}
                >
                    {textReference}
                    
                </motion.p>
                </Text>
            </ContainerSecond>
            {props.isLoggedIn ? <Redirect to= "/gameboard" 
            /> : null} 
  </Section>
    )
}

export default Main

