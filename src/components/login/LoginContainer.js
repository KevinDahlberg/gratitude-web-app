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
      const { loginUser } = this.props
      loginUser(objectToSend)
    }

    handleClick() {
        history.push('/register')
    }

    componentDidUpdate(){
        const { isLoggedIn } = this.props
        if (isLoggedIn ) {
        history.push('/privateRoute')
        } else {
            window.location.reload();
        }
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
    isLoggedIn: state.userReducer.isLoggedIn,
    loginStatus: state.userReducer.loginStatus
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ loginUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)