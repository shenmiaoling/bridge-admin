import React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from './src/containers/App'
import Login from './src/components/Login'
import Home from './src/components/Home'
import NotFound from './src/components/NotFound'

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="/admin" component={Home}/>
      <Route path="*" component={NotFound} />
    </Route>
)
