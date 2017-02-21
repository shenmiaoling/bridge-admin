const InitialState = {
  status:'',
  data:[],
  taskbar:{},
  ChangeResult:'',
  AddResult:'',
  errMsg: '',
  backStage:[],
  Developer:[],
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
      return Object.assign({},state,{status: 'fetch_success',
        data:state.data.map(
        (item)=>{
          if(item._id==action.ChangeResult._id){
            return action.ChangeResult
          }else{
            return item
          }
      }),end: action.end})
    case 'CHANGE_PROJECT_TASK_STATUS_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    case 'FETCH_PROJECT_TASK_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'FETCH_PROJECT_TASK_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:state.data.concat(action.Task),backStage:state.backStage.concat(action.Task),end: action.end})
    case 'FETCH_PROJECT_TASK_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    case 'DELETE_PROJECT_TASK_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'DELETE_PROJECT_TASK_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:state.data.filter((item)=>{return item._id !== action.DeleteResult}),end: action.end})
    case 'DELETE_PROJECT_TASK_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    case 'FETCH_DEVELOPER_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'FETCH_DEVELOPER_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',Developer:action.Developer,end: action.end})
    case 'FETCH_DEVELOPER_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    case 'FETCH_PROJECT_DEVELOPER_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'FETCH_PROJECT_DEVELOPER_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',AddResult:action.AddResult,
        Developer:state.Developer.map(
          (item)=>{
            if(item._id==action.id){
              return action.AddResult
            }else{
              return item
            }
          }),
        end: action.end})
    case 'FETCH_PROJECT_DEVELOPER_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    default:
      return state
  }
}
