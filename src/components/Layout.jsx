import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './home/HomeContainer.js'
import Login from './login/LoginContainer.js'
import Register from './register/RegisterContainer.js'

const Layout = () => (
  <div className="body">
    <Switch>
        <div className="content-body">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
    </Switch>
  </div>
)

export default Layout
