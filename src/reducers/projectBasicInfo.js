const InitialState = {
  status:'',
  data:'',
  errMsg: '',
  end: false
}

export default function projectBasicInfo (state = InitialState, action) {
  switch(action.type) {
    case 'FETCH_PROJECT_BASIC_INFO_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'FETCH_PROJECT_BASIC_INFO_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:action.ProjectBasicInfo,end: action.end})
    case 'FETCH_PROJECT_BASIC_INFO_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    default:
      return state
  }
}
