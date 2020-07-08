import React, { Component } from 'react'
import UserDetails from './UserDetails'
import PersonalDetails from './PersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export default class UserForm extends Component {
  state= {
    step: 1,
    name: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }
  render() {
    const { step, lastName, name, email, bio, city, occupation } = this.state
    const values = { step, lastName, name, email, bio, city, occupation }
    switch(step){
      case 1: 
        return (
          <UserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        )
      case 2: 
        return (
          <PersonalDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
        )
      case 3: 
        return (
          <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />
        )
      case 4: 
        return <Success/>
      default:
        return 
    }
  }
}
