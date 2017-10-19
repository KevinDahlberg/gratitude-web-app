import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginForm from './LoginForm.jsx'
import RegisterForm from './RegisterForm.jsx'

const Layout = () => (
  <div className="body">
    <Switch>
        <div className="content-body">
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
        </div>
    </Switch>
  </div>
)

export default Layout
