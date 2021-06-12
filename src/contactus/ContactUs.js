import React, { Component } from 'react'

// Import components
import UserForm from './UserForm'
import './contactUs.css'

export class ContactUs extends Component {
    
    // Class component 

    render() {
        return (
            <div className='contactUs' >
                <div>
                    <h1>CONTACT US</h1>
                    <p>If you have ideas or suggestions on how to improve our game or if you want to be part of our team</p>
                    <h2>You can simply contact us and send us a message</h2>
                    

                </div>

                <UserForm />

                
            </div>
        )
    }
}

export default ContactUs
