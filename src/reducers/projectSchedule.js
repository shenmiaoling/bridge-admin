const InitialState = {
  status:'',
  data:'',
  errMsg: '',
  end: false
}

export default function projectSchedule (state = InitialState, action) {
  switch(action.type) {
    case 'FETCH_PROJECT_SCHEDULE_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'FETCH_PROJECT_SCHEDULE_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:action.Schedule,end: action.end})
    case 'FETCH_PROJECT_SCHEDULE_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    default:
      return state
  }
}
