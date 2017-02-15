import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import loginForm from './login'
import project from './project'
import { modelReducer, formReducer } from 'react-redux-form'
const rootReducer = combineReducers({
  loginForm,
  routing,
  project,
  login: modelReducer('login', { admin: '', password:''}),
  ReduxloginForm: formReducer('login')
})
export default rootReducer
