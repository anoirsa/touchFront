import React from 'react'
import {motion} from 'framer-motion';
import '../gamerulesOrigin.css'

const divLeft = () => {
    return (
        <motion.div
                initial ={{opacity :0.5,x:"-70%"}}
                whileHover={{opacity :1 , scale:1.1,x:0,transition:{duration:1}}}
               
                
             >
             <div className="toShowIt"><p>Sign in from the home page</p></div>    
             <div className="showIt">
                 <i className="fas fa-file-signature"> </i>
                 <h3>I</h3> </div>
             </motion.div>
    )
}

export default divLeft
