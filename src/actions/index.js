import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'
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
export function fetchLogin(api,data) {
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
          if(json._id){
            localStorage.setItem("projectId",json._id)
            dispatch(fetchProjectSuccess(json,true))
            browserHistory.push(`/project/${json._id}/uploadui`)
          }else{
            localStorage.removeItem("token")
            browserHistory.push('/login')
          }
        }).catch( err => fetchProjectFailure(err,false))
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
export function fetchProjectImages(api,data) {
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
function deleteProjectUISuccess(json,end){
  return {
    type: 'DELETE_PROJECT_UI_SUCCESS',
    DeleteResult: json,
    end: end
  }
}
function deleteProjectUIFailure(err){
  return {
    type:'DELETE_PROJECT_UI_FAILURE',
    err: err
  }
}
export function deleteProjectUI(api) {
  return dispatch => {
    dispatch(deleteProjectUIRequest())
      return fetch(api,{
        method:'DELETE'
      }).then(response => response.json())
        .then(json =>{
          console.log(json)
          if(!json.error){
            dispatch(deleteProjectUISuccess(json,true))
          }else{
            localStorage.removeItem("token")
            browserHistory.push('/login')
          }
        }).catch( err => deleteProjectUIFailure(err,false))
  }
}
