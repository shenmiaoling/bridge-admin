import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'
import {fetchProjectSchedule} from './fetchSchedule'
function fetchLoginRequest(){
  return {
    type: 'FETCH_LOGIN_REQUEST'
  }
}
function fetchLoginSuccess(json,end){
  return {
    type: 'FETCH_LOGIN_SUCCESS',
    LoginData: json,
    end: end
  }
}
function fetchLoginFailure(err){
  return {
    type:'FETCH_LOGIN_FAILURE',
    err: err
  }
}
function fetchLogin(api,data) {
  return dispatch => {
    dispatch(fetchLoginRequest())
      return fetch(api,{
        method:'POST',
        headers: {
              'Content-Type': 'application/json'
            },
        body: JSON.stringify({
              admin: data.admin,
              password: data.password
            })
      }).then(response => response.json())
        .then(json =>{
          if(json.token){
            localStorage.setItem("token",json.token)
            dispatch(fetchLoginSuccess(json,true))
            browserHistory.replace('/')
          }
        }).catch( err => fetchLoginFailure(err,false))
  }
}
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
function fetchProject(api,data) {
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
function fetchProjectImagesRequest(){
  return {
    type: 'FETCH_PROJECT_IMAGES_REQUEST'
  }
}
function fetchProjectImagesSuccess(json,end){
  return {
    type: 'FETCH_PROJECT_IMAGES_SUCCESS',
    ProjectImages: json,
    end: end
  }
}
function fetchProjectImagesFailure(err){
  return {
    type:'FETCH_PROJECT_IMAGES_FAILURE',
    err: err
  }
}
function fetchProjectImages(api,data) {
  return dispatch => {
    dispatch(fetchProjectImagesRequest())
      return fetch(api,{
        method:'POST',
        body: data
      }).then(response => response.json())
        .then(json => {
          if(json._id){
            dispatch(fetchProjectImagesSuccess(json,true))
            }else{
              localStorage.removeItem("token")
              browserHistory.push('/login')
          }
        }
        ).catch( err => fetchProjectImagesFailure(err,false))
  }
}
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
function deleteProjectUI(api,id) {
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
export { fetchProjectSchedule,fetchLogin,fetchProject,fetchProjectImages,deleteProjectUI }
