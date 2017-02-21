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
export function fetchProjectTaskBar(api) {
  return dispatch => {
    dispatch(fetchProjectTaskBarRequest())
      return fetch(api,{
        method:'POST',
      }).then(response => response.json())
        .then(json =>{
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
export function fetchProjectTask(api,data,Taskform) {
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
          Taskform.reset()
          dispatch(fetchProjectTaskSuccess(json,true))
        }).catch( err => {
          localStorage.removeItem("token")
          browserHistory.push('/login')
          fetchProjectTaskFailure(err,false)
        })
  }
}
function ChangeProjectTaskStatusRequest(){
  return {
    type: 'CHANGE_PROJECT_TASK_STATUS_REQUEST'
  }
}
function ChangeProjectTaskStatusSuccess(json,end){
  return {
    type: 'CHANGE_PROJECT_TASK_STATUS_SUCCESS',
    ChangeResult: json,
    end: end
  }
}
function ChangeProjectTaskStatusFailure(err){
  return {
    type:'CHANGE_PROJECT_TASK_STATUS_FAILURE',
    err: err
  }
}
export function ChangeProjectTaskStatus(api,data) {
  console.log(data)
  return dispatch => {
    dispatch(ChangeProjectTaskStatusRequest())
      return fetch(api,{
        method:'PATCH',
        headers: {
              'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
      }).then(response => response.json())
        .then(json =>{
          // console.log(json)
          dispatch(ChangeProjectTaskStatusSuccess(json,true))
        }).catch( err => {
          ChangeProjectTaskStatusFailure(err,false)
          localStorage.removeItem("token")
          browserHistory.push('/login')
        })
  }
}
function deleteProjectTaskRequest(){
  return {
    type: 'DELETE_PROJECT_TASK_REQUEST'
  }
}
function deleteProjectTaskSuccess(id,end){
  return {
    type: 'DELETE_PROJECT_TASK_SUCCESS',
    DeleteResult: id,
    end: end
  }
}
function deleteProjectTaskFailure(err){
  return {
    type:'DELETE_PROJECT_TASK_FAILURE',
    err: err
  }
}
export function deleteProjectTask(api,id) {
  return dispatch => {
    dispatch(deleteProjectTaskRequest())
      return fetch(api,{
        method:'DELETE'
      }).then(() =>{
            dispatch(deleteProjectTaskSuccess(id,true))
        }).catch( err => {
          deleteProjectTaskFailure(err,false)
          localStorage.removeItem("token")
          browserHistory.push('/login')
        })
  }
}
function fetchDeveloperRequest(){
  return {
    type: 'FETCH_DEVELOPER_REQUEST'
  }
}
function fetchDeveloperSuccess(json,end){
  return {
    type: 'FETCH_DEVELOPER_SUCCESS',
    Developer: json,
    end: end
  }
}
function fetchDeveloperFailure(err){
  return {
    type:'FETCH_DEVELOPER_FAILURE',
    err: err
  }
}
export function fetchDeveloper(api) {
  return dispatch => {
    dispatch(fetchDeveloperRequest())
      return fetch(api,{
        method:'GET'
      }).then(response => response.json())
        .then(json =>{
            dispatch(fetchDeveloperSuccess(json,true))
        }).catch( err => {
          fetchDeveloperFailure(err,false)
          localStorage.removeItem("token")
          browserHistory.push('/login')
        })
  }
}
