import React, { Component } from 'react'
import { RaisedButton, FlatButton } from 'material-ui'
import { history } from '../data/store'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleRegisterClick = this.handleRegisterClick.bind(this)

  }

  handleLoginClick() {
    history.push('/login')
  }

  handleRegisterClick() {
    history.push('/register')
  }

  render () {
    return (
      <div>
      <RaisedButton label="Login" onClick={this.handleLoginClick} primary={true} />
      <FlatButton label="Register" secondary={true} onClick={this.handleRegisterClick} />
      </div>
    )
  }
}
