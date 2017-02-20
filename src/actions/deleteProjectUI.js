import { browserHistory } from 'react-router'
function deleteProjectUIRequest(){
  return {
    type: 'DELETE_PROJECT_UI_REQUEST'
  }
}
function deleteProjectUISuccess(id,end){
  return {
    type: 'DELETE_PROJECT_UI_SUCCESS',
    DeleteResult: id,
    end: end
  }
}
function deleteProjectUIFailure(err){
  return {
    type:'DELETE_PROJECT_UI_FAILURE',
    err: err
  }
}
export function deleteProjectUI(api,id) {
  return dispatch => {
    dispatch(deleteProjectUIRequest())
      return fetch(api,{
        method:'DELETE'
      }).then(() =>{
            dispatch(deleteProjectUISuccess(id,true))
        }).catch( err => {
          deleteProjectUIFailure(err,false)
          localStorage.removeItem("token")
          browserHistory.push('/login')
        })
  }
}