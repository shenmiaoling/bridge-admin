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
          if(json){
            dispatch(fetchLoginSuccess(json,true))
          }
        }).catch( err => fetchLoginFailure(err,false))
  }
}
