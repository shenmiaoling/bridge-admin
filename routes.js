import React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from './src/containers/App'
import Login from './src/components/Login'
import NotFound from './src/components/NotFound'

export default (
    <Route path="/" component={Login}>
      <IndexRoute component={App} />
      <Route path="*" component={NotFound} />
    </Route>
)
