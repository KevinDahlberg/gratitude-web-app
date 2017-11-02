import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { TextField, RaisedButton, FlatButton } from 'material-ui'

import { history } from '../../data/store'

import { loginUser } from '../../data/userActions'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = { email: '', password: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
      const { loginUser } = this.props
      e.preventDefault();
      const objectToSend = { email: this.state.email, password: this.state.password }
      console.log(objectToSend);
      loginUser(objectToSend)
    }

    handleClick() {
        history.push('/register')
    }

    render() {
        return ( 
          <div>
                <form onSubmit = { this.handleSubmit } >
                    <TextField 
                        hintText = "Email"
                        name = "email"
                        value = { this.state.email }
                        onChange = { this.handleChange } 
                    /> 
                    <br / >
                    <TextField 
                        hintText = "Password"
                        name = "password"
                        type = "password"
                        value = { this.state.password }
                        onChange = { this.handleChange } 
                    /> 
                    <br / >
                    <RaisedButton 
                        label = "Login"
                        type = "submit"
                        primary = { true } /> 
                        <FlatButton label = "Register"
                        secondary = { true }
                        onClick = { this.handleClick }
                    /> 
                </form> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.userReducer.isLoggedIn
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ loginUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)