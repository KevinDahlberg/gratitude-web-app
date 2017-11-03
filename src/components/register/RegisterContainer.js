import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { history } from '../../data/store'

import { registerUser } from '../../data/userActions'

import RegisterForm from './RegisterForm.jsx'

class Register extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(objectToSend) {
        const { registerUser } = this.props
        registerUser(objectToSend)
        history.push('/login')
    }

    handleClick() {
        history.push('/login')
    }

    render() {
        return (
            <RegisterForm
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
    return bindActionCreators({ registerUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)