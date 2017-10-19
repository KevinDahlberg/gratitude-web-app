import React, { Component } from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { history } from '../data/store'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  registerUser(user) {
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }
    fetch('/user/registerUser', init)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault()
    let objectToSend = {email: this.state.email, password: this.state.password}
    this.registerUser(objectToSend)
    history.push('/login')
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <TextField
          hintText="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <TextField
          hintText="Password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <RaisedButton label="Register" type="submit" primary={true} />
      </form>
      </div>
    )
  }
}
