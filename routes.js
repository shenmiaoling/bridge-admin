import React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from './src/containers/App'
import Home from './src/component/App'
import NotFound from './src/component/NotFound'

export default (
    <Route path="/" component={App}>
      <IndexRoute getComponent={Home} />
      <Route path="*" getComponent={NotFound} />
    </Route>
)
