import React, { Component } from 'react'
import { TextField, RaisedButton } from 'material-ui'

export default class Login extends Component {

  render() {
    return (
      <div>
      <form>

        <br />
        <TextField
          hintText="Email"
        />
        <br />
        <TextField
          hintText="Password"
          value="password"
        />
        <br />
        <RaisedButton label="Login" type="submit" primary={true} />
      </form>
      </div>
    )
  }
}
