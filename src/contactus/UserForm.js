import React, { Component } from 'react'
import { FirstColumn } from '../home/MainCss';
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            step : 1 ,
            firstName : '',
            email : '',
            city : '',
            message : ''
        }
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    nextStep = () => {
        this.setState({
            step :  this.step + 1 ,
        })
    }

    prevStep = () => {
        this.setState({
            step : this.step - 1
        })
    }
    
    handleChange = input => e => {
        e.preventDefault();
        this.setState({
            [input] : e.target.value
        })
    }
    render() {
        const {step, firstName, lastName, email, city, message} = this.state;
        const values = {step, firstName, lastName, email, city, message}

        switch(step) {
            case 1 :
                return <FormUserDetails  
                    values = {values}
                    nextStep = {this.nextStep}

                />
            case 2 :
                return <h1>Second stage</h1>    
            case 3 : 
                return <h1> Third stage</h1>    
        }
    }
}

export default UserForm
