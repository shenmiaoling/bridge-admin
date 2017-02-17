import fetch from 'isomorphic-fetch'

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
            location.replace('/user')
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
        body: JSON.stringify({
              data
            })
      }).then(response => response.json())
        .then(json =>{
          if(json._id){
            localStorage.setItem("projectId",json._id)
            dispatch(fetchProjectSuccess(json,true))
            location.replace(`/project/editproject/${json._id}`)
          }else{
            localStorage.removeItem("token")
            location.replace('/')
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
  console.log(data)
  return dispatch => {
    dispatch(fetchProjectImagesRequest())
      return fetch(api,{
        method:'POST',
        body: data
      }).then(response => {
        if(response.ok){
          dispatch(fetchProjectImagesSuccess(response,true))
          }else{
            localStorage.removeItem("token")
            location.replace('/')
          }
      }).catch( err => fetchProjectImagesFailure(err,false))
  }
}
function fetchProjectBasicInfoRequest(){
  return {
    type: 'FETCH_PROJECT_BASIC_INFO_REQUEST'
  }
}
function fetchProjectBasicInfoSuccess(json,end){
  return {
    type: 'FETCH_PROJECT_BASIC_INFO_SUCCESS',
    ProjectBasicInfo: json,
    end: end
  }
}
function fetchProjectBasicInfoFailure(err){
  return {
    type:'FETCH_PROJECT_BASIC_INFO_FAILURE',
    err: err
  }
}
export function fetchProjectBasicInfo(api,data) {
  return dispatch => {
    dispatch(fetchProjectBasicInfoRequest())
      return fetch(api,{
        method:'PATCH',
        headers: {
              'Content-Type': 'application/json'
            },
        body: JSON.stringify({
              title: data.title,
              cycle: data.cycle,
              startDate: data.startDate,
              endDate : data.endDate,
              version: data.version,
              progression: data.progression
            })
      }).then(response => response.json())
        .then(json =>{
          if(json){
            dispatch(fetchProjectBasicInfoSuccess(json,true))
          }else{
            localStorage.removeItem("token")
            location.replace('/')
          }
        }).catch( err => fetchProjectBasicInfoFailure(err,false))
  }
}
