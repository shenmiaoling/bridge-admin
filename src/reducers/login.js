const InitialState = {
  status:'',
  data:'',
  errMsg: '',
  end: false
}

export default function loginForm (state = InitialState, action) {
  switch(action.type) {
    case 'FETCH_LOGIN_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'FETCH_LOGIN_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:action.LoginData,end: action.end})
    case 'FETCH_LOGIN_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    default:
      return state
  }
}
