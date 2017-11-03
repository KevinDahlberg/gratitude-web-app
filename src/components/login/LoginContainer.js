import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { history } from '../../data/store'

import { loginUser } from '../../data/userActions'

import LoginForm from './LoginForm.jsx'

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(objectToSend) {
    //   const { loginUser } = this.props
    //   e.preventDefault();
    //   const objectToSend = { email: this.state.email, password: this.state.password }
      console.log(objectToSend);
      loginUser(objectToSend)
    }

    handleClick() {
        history.push('/register')
    }

    render() {
        return ( 
                <LoginForm 
                onHandleClick={this.handleClick}
                onHandleSubmit={this.handleSubmit}
                />
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