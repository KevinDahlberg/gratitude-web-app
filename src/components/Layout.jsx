import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './home/HomeContainer.js'
import Login from './login/LoginContainer.js'
import RegisterForm from './RegisterForm.jsx'

const Layout = () => (
  <div className="body">
    <Switch>
        <div className="content-body">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegisterForm} />
        </div>
    </Switch>
  </div>
)

export default Layout
