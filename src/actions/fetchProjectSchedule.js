import { browserHistory } from 'react-router'
function fetchProjectScheduleRequest(){
  return {
    type: 'FETCH_PROJECT_SCHEDULE_REQUEST'
  }
}
function fetchProjectScheduleSuccess(json,end){
  return {
    type: 'FETCH_PROJECT_SCHEDULE_SUCCESS',
    Schedule: json,
    end: end
  }
}
function fetchProjectScheduleFailure(err){
  return {
    type:'FETCH_PROJECT_SCHEDULE_FAILURE',
    err: err
  }
}
export function fetchProjectSchedule(api,data) {
  return dispatch => {
    dispatch(fetchProjectScheduleRequest())
      return fetch(api,{
        method:'POST',
        headers: {
              'Content-Type': 'application/json'
            },
        body: JSON.stringify({
          time1: data.time1,
          time2: [data.time2,data.time3],
          time3: [data.time4,data.time5],
          time4: [data.time6,data.time7],
          time5: data.time8
        })
      }).then(response => response.json())
        .then(json =>{
            dispatch(fetchProjectScheduleSuccess(json,true))
            browserHistory.push(`/project/${json.projectId}/task`)
        }).catch( err => {
          localStorage.removeItem("token")
          browserHistory.push('/login')
          fetchProjectScheduleFailure(err,false)
        })
  }
}
