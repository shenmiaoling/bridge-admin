import { browserHistory } from 'react-router'
function fetchProjectDocumentRequest(){
  return {
    type: 'FETCH_PROJECT_DOCUMENT_REQUEST'
  }
}
function fetchProjectDocumentSuccess(json,end){
  return {
    type: 'FETCH_PROJECT_DOCUMENT_SUCCESS',
    Document: json,
    end: end
  }
}
function fetchProjectDocumentFailure(err){
  return {
    type:'FETCH_PROJECT_DOCUMENT_FAILURE',
    err: err
  }
}
export function fetchProjectDocument(api,data) {
  return dispatch => {
    dispatch(fetchProjectDocumentRequest())
      return fetch(api,{
        method:'POST',
        headers: {
              'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
      }).then(response => response.json())
        .then(json =>{
            dispatch(fetchProjectDocumentSuccess(json,true))
            // browserHistory.push(`/project/${json.projectId}/document`)
        }).catch( err => {
          localStorage.removeItem("token")
          browserHistory.push('/login')
          fetchProjectDocumentFailure(err,false)
        })
  }
}
