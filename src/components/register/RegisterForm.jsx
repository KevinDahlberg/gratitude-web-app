import React, { Component } from 'react'
import { TextField, RaisedButton, FlatButton } from 'material-ui'

export default class RegisterForm extends Component {
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

  handleSubmit(e) {
    e.preventDefault()
    let objectToSend = {email: this.state.email.toLowerCase(), password: this.state.password}
    this.props.onHandleSubmit(objectToSend)
  }

  handleClick() {
    this.props.onHandleClick()
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
        <FlatButton 
          label = "Back"
          secondary = {true}
          onClick = {this.handleClick}
        />
        <RaisedButton label="Register" type="submit" primary={true} />
      </form>
      </div>
    )
  }
}
