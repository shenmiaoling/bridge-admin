import React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from './src/containers/App'
import Login from './src/components/Login'
import User from './src/components/User'
import Project from './src/components/Project'
import EditProject from './src/components/EditProject'
import NotFound from './src/components/NotFound'

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="/user" component={User}/>
      <Route path="/project" component={Project}/>
      <Route path="/project/editproject/:id" component={EditProject}/>
      <Route path="*" component={NotFound} />
    </Route>
)
