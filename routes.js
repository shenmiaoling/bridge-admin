import React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from './src/containers/App'
import Login from './src/components/Login'
import User from './src/components/User'
import Project from './src/components/Project'
import AddUI from './src/components/ProjectUI'
import ProjectTime from './src/components/ProjectTime'
import CreateProject from './src/components/CreateProject'
import EditProject from './src/components/EditProject'
import NotFound from './src/components/NotFound'

export default (
    <Route path="/" component={App}>
      <IndexRoute component={User}/>
      <Route path="/login" component={Login}/>
      <Route path="/project" component={Project}/>
      <Route path="/project/new" component={CreateProject}/>
      <Route path="/project/:id/uploadui" component={AddUI}/>
      <Route path="/project/:id/schedule" component={ProjectTime}/>
{/*      <Route path="/project/:id/schedule" component={AddSchedule}/>
      <Route path="/project/:id/task" component={AddTask}/>
      <Route path="/project/:id/document" component={AddDocument}/>
      <Route path="/project/:id/edit" component={EditProject}/>
      <Route path="/project/:id/uploadui/:ui_id" component={EditUI}/>
      <Route path="/project/:id/schedule/:schedule_id" component={EditSchedule}/>
      <Route path="/project/:id/task/:task_id" component={EditTask}/>
      <Route path="/project/:id/document/:document_id" component={EditDocument}/>*/}
      <Route path="*" component={NotFound} />
    </Route>
)
