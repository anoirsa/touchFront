import React from 'react'
import TextField from '@material-ui/core/TextField'
import {motion} from 'framer-motion';
import styled from 'styled-components'
//import 'antd/dist/antd.css';
import {Form } from 'antd'


function FormUserDetails(props) {
    const Button = styled(motion.div)`
    border : 1px solid #fff;
    border-radius : 4px;
    margin-top:0.1rem;
    height: 0.5px;
    padding: 1rem;
    cursor: pointer;
    `;

    return (
        <div
            style={{width:"100%",height:"100%"}}        
        >
        <form 
           
        >
        <table>
        <tr>
            <td> Name : </td>
            <td>
                <input
                type="text"
                >
                </input>
            </td>
        </tr>

        <tr>
            <td> Email : </td>
            <td>
                <input
                type="text"
                >
                </input>
            </td>
        </tr>

        <tr>
            <td> City : </td>
            <td>
                <input
                type="text"
                >
                </input>
            </td>
        </tr>
         <tr>
             <td>Message : </td>
         </tr>

        </table>
        <textarea 
        
        style ={{width:"100%",height:"50%"}}
        />
        <Button
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9,backgroundColor:'#adadeb',transition:{duration:0},background:"transparent"}}
        initial ={{opacity:0}}
        animate ={{opacity:1, transition:{duration : 1.5}}}
        >
            Send
        </Button>
        </form> 
        </div>
    )
}

export default FormUserDetails
