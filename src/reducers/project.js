const InitialState = {
  status:'',
  data:'',
  errMsg: '',
  end: false
}

export default function project (state = InitialState, action) {
  switch(action.type) {
    case 'FETCH_PROJECT_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'FETCH_PROJECT_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:action.Project,end: action.end})
    case 'FETCH_PROJECT_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    default:
      return state
  }
}
