import { browserHistory } from 'react-router'
function fetchProjectRequest(){
  return {
    type: 'FETCH_PROJECT_REQUEST'
  }
}
function fetchProjectSuccess(json,end){
  return {
    type: 'FETCH_PROJECT_SUCCESS',
    Project: json,
    end: end
  }
}
function fetchProjectFailure(err){
  return {
    type:'FETCH_PROJECT_FAILURE',
    err: err
  }
}
export function fetchProject(api,data) {
  return dispatch => {
    dispatch(fetchProjectRequest())
      return fetch(api,{
        method:'POST',
        headers: {
              'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
      }).then(response => response.json())
        .then(json =>{
            localStorage.setItem("projectId",json._id)
            dispatch(fetchProjectSuccess(json,true))
            browserHistory.push(`/project/${json._id}/uploadui`)
        }).catch( err => {
          localStorage.removeItem("token")
          browserHistory.push('/login')
          fetchProjectFailure(err,false)
        })
  }
}