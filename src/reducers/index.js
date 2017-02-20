import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import loginForm from './login'
import project from './project'
import projectImages from './projectImages'
import projectSchedule from './projectSchedule'
import projectTask from './projectTask'
import projectDocument from './projectDocument'
import { modelReducer, formReducer } from 'react-redux-form'
const rootReducer = combineReducers({
  loginForm,
  routing,
  project,
  projectImages,
  projectSchedule,
  projectTask,
  projectDocument,
  login: modelReducer('login', { admin: '', password:''}),
  ReduxloginForm: formReducer('login')
})
export default rootReducer
