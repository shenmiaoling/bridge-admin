const InitialState = {
  status:'',
  data:[],
  taskbar:{},
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
    case 'FETCH_PROJECT_TASK_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'FETCH_PROJECT_TASK_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:state.data.concat(action.Task),end: action.end})
    case 'FETCH_PROJECT_TASK_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    case 'DELETE_PROJECT_UI_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'DELETE_PROJECT_UI_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:state.data.filter((item)=>{return item._id !== action.DeleteResult}),end: action.end})
    case 'DELETE_PROJECT_UI_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    default:
      return state
  }
}
