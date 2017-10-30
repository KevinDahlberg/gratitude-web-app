import React, { Component } from 'react'
import { TextField, RaisedButton, FlatButton } from 'material-ui'
import { history } from '../data/store'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  loginUser(user) {
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }
    fetch('/user/loginUser', init)
    .then(function(response) {
      console.log(response);
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let objectToSend = {email: this.state.email, password: this.state.password}
    console.log(objectToSend);
    this.loginUser(objectToSend)
  }

  handleClick() {
    history.push('/register')
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
        <RaisedButton label="Login" type="submit" primary={true} />
        <FlatButton label="Register" secondary={true} onClick={this.handleClick} />
      </form>
      </div>
    )
  }
}
