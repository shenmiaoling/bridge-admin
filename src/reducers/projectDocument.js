const InitialState = {
  status:'',
  data:'',
  errMsg: '',
  end: false
}

export default function projectSchedule (state = InitialState, action) {
  switch(action.type) {
    case 'FETCH_PROJECT_DOCUMENT_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'FETCH_PROJECT_DOCUMENT_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:action.Document,end: action.end})
    case 'FETCH_PROJECT_DOCUMENT_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    default:
      return state
  }
}
