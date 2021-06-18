import React from 'react'
import styled from 'styled-components'; 
import { BackGround } from '../../../home/subComponents/RegistrationModal';
import { PieChart } from 'react-minimal-pie-chart';
import Button from '@material-ui/core/Button';


// For testing
const colors = ["#E38627" , "#C13C37", "black", "#6A2135" ];
/** const optionsAvailable = [
    { option: 'spain', percentage: 60 },
    { option: 'italy', percentage: 10 },
    { option: 'germany', percentage: 10 },
    { option: 'france', percentage: 20 }
  ]; **/

// For testing  

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
     .optionShow {
         display: flex;
         flex-direction: row;
         gap : 20px;
         height: 10%;
         width: 100%;
         margin-bottom: 10px;
         margin-top: 10px;
     }
    `


function Percentage({percentageModal, handlePercentageModal,optionsAvailable}) {
    var subData = [];
    optionsAvailable.forEach((item , indexs) => {
        subData.push({
            title : item.option ,
            value : item.percentage,
            color : colors[indexs]
        })
    })
    return <>  
    {percentageModal ? (<BackGround>
        <ModalWrapper percentageModal={percentageModal}  >
        <PieChart
        style={{height:"70%"}}
  data={subData}
/>
    <div
        className ="optionShow">
           {subData.map((item, index) => {
               var widthValue = optionsAvailable.length === 2 ? "50%" : "25%";
               return (
                <div style ={{width : widthValue ,height:"100%",display:"flex" ,flexDirection:"row"}}>
                <div style={{width : "10%" , height:"100%" , background: item.color}}></div>
               <div style={{width : "90%" , height:"100%", textAlign:"center"}}><p>{item.title}</p>
               <p>{item.value} %</p>
            </div>
            </div>
               )
           })}
</div>

        <Button
              color="primary"
              variant="contained"
              onClick = {() => handlePercentageModal()} 
            
         >Continue</Button>
       </ModalWrapper>
    </BackGround>) : null}
    </>
}

export default Percentage


/**
 [
    { title: 'One', value: 40, color: '#E38627' },
    { title: 'Two', value: 20, color: '#C13C37' },
    { title: 'Three', value: 20, color: 'black', },
    { title: 'four', value: 20, color: '#6A2135', }
  ]
 */


 /*
<div style ={{width : "25%",height:"100%",background:"red",display:"flex" ,flexDirection:"row"}}>
                <div style={{width : "10%" , height:"100%" , background:"black"}}></div>
                <div style={{width : "90%" , height:"100%", textAlign:"center"}}><p>Spain 32%</p></div>
            </div>
            <div style ={{width : "25%",height:"100%",background:"red"}} ></div>
            <div style ={{width : "25%",height:"100%",background:"red"}}></div>
            <div style ={{width : "25%",height:"100%",background:"red"}}></div>
 **/