let initialState = {
  data: {}
}
export default function projectinfo (state = initialState, action) {
  switch (action.type) {
    case 'GET_PROJECT_DETAIL_INFO':
      return Object.assign({},state,{status: 'get_success',data:action.data})
    default:
      return state
  }
}
