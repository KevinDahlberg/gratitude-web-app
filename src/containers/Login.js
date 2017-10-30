import React, { Component } from 'react'
// import { push } from 'react-router-redux'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import LoginForm from '../components/LoginForm.jsx'

class Login extends Component {
  constructor(props){
    super(props)

    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
}

export default Login
