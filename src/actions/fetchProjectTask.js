import { browserHistory } from 'react-router'

function fetchProjectTaskBarRequest(){
  return {
    type: 'FETCH_PROJECT_TASK_BAR_REQUEST'
  }
}
function fetchProjectTaskBarSuccess(json,end){
  return {
    type: 'FETCH_PROJECT_TASK_BAR_SUCCESS',
    Taskbar: json,
    end: end
  }
}
function fetchProjectTaskBarFailure(err){
  return {
    type:'FETCH_PROJECT_TASK_BAR_FAILURE',
    err: err
  }
}
export function fetchProjectTaskBar(api,data) {
  return dispatch => {
    dispatch(fetchProjectTaskBarRequest())
      return fetch(api,{
        method:'POST',
        headers: {
              'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
      }).then(response => response.json())
        .then(json =>{
          console.log(json);
          dispatch(fetchProjectTaskBarSuccess(json,true))
        }).catch( err => {
          localStorage.removeItem("token")
          browserHistory.push('/login')
          fetchProjectTaskBarFailure(err,false)
        })
  }
}
function fetchProjectTaskRequest(){
  return {
    type: 'FETCH_PROJECT_TASK_REQUEST'
  }
}
function fetchProjectTaskSuccess(json,end){
  return {
    type: 'FETCH_PROJECT_TASK_SUCCESS',
    Task: json,
    end: end
  }
}
function fetchProjectTaskFailure(err){
  return {
    type:'FETCH_PROJECT_TASK_FAILURE',
    err: err
  }
}
export function fetchProjectTask(api,data) {
  return dispatch => {
    dispatch(fetchProjectTaskRequest())
      return fetch(api,{
        method:'POST',
        headers: {
              'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
      }).then(response => response.json())
        .then(json =>{
          console.log(json);
          dispatch(fetchProjectTaskSuccess(json,true))
        }).catch( err => {
          localStorage.removeItem("token")
          browserHistory.push('/login')
          fetchProjectTaskFailure(err,false)
        })
  }
}
