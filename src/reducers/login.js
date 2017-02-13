const InitialState = {
  status:'',
  data:'',
  errMsg: ''
}

export default function login (state=InitialState, action) {
  switch(action.type) {
    case 'FETCH_LOGIN_REQUEST':
      return Object.assigin({},state,{status: 'fetch_start'})
    case 'FETCH_LOGIN_SUCCESS':
      return Object.assigin({},state,{status: 'fetch_success',data:action.LoginData})
    case 'FETCH_LOGIN_FAILURE':
      return Object.assigin({},state,{status: 'fetch_failure',errMsg: action.err})
    default:
      return state
  }
}
