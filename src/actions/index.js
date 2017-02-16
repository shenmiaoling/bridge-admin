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
  console.log(data);
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
            location.replace(`/editproject/${json._id}`)
            dispatch(fetchProjectSuccess(json,true))
          }
        }).catch( err => fetchProjectFailure(err,false))
  }
}
