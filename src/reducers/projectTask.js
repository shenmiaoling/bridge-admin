const InitialState = {
  status:'',
  data:[],
  taskbar:{},
  ChangeResult:'',
  errMsg: '',
  end: false
}

export default function projectTask (state = InitialState, action) {
  switch(action.type) {
    case 'FETCH_PROJECT_TASK_BAR_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'FETCH_PROJECT_TASK_BAR_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',taskbar:action.Taskbar,end: action.end})
    case 'FETCH_PROJECT_TASK_BAR_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
      case 'CHANGE_PROJECT_TASK_STATUS_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'CHANGE_PROJECT_TASK_STATUS_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',ChangeResult:action.ChangeResult,end: action.end})
    case 'CHANGE_PROJECT_TASK_STATUS_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    case 'FETCH_PROJECT_TASK_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'FETCH_PROJECT_TASK_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:state.data.concat(action.Task),end: action.end})
    case 'FETCH_PROJECT_TASK_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    case 'DELETE_PROJECT_TASK_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'DELETE_PROJECT_TASK_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:state.data.filter((item)=>{return item._id !== action.DeleteResult}),end: action.end})
    case 'DELETE_PROJECT_TASK_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    default:
      return state
  }
}