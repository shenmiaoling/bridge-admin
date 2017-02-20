import { browserHistory } from 'react-router'
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