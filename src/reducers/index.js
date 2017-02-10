import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import handleClick from './booleans'
import { modelReducer, formReducer } from 'react-redux-form'
const rootReducer = combineReducers({
  handleClick,
  routing
})
export default rootReducer
