const InitialState = {
  status:'',
  data:[],
  errMsg: '',
  end: false
}

export default function projectImages (state = InitialState, action) {
  switch(action.type) {
    case 'FETCH_PROJECT_IMAGES_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'FETCH_PROJECT_IMAGES_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:state.data.concat(action.ProjectImages),end: action.end})
    case 'FETCH_PROJECT_IMAGES_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    case 'DELETE_PROJECT_UI_REQUEST':
      return Object.assign({},state,{status: 'fetch_start'})
    case 'DELETE_PROJECT_UI_SUCCESS':
      return Object.assign({},state,{status: 'fetch_success',data:state.data.filter((item)=>{return item._id == action.id}),end: action.end})
    case 'DELETE_PROJECT_UI_FAILURE':
      return Object.assign({},state,{status: 'fetch_failure',errMsg: action.err})
    default:
      return state
  }
}
