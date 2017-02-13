import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import login from './login'
import { modelReducer, formReducer } from 'react-redux-form'
const rootReducer = combineReducers({
  login,
  routing,
  login: modelReducer('login', { username: '', password:''}),
  loginForm: formReducer('login')
})
export default rootReducer
