import React from 'react'
import { Field, Form, Control} from 'react-redux-form'
import { connect } from 'react-redux';
import BasicInfo from '../ProjectBasicInfo'
import './style.styl'
export default class editProject extends React.Component{
  render(){
    const { actions, fetchProject } = this.props
    return (
      <div className="container">
        <div className="project-detail">
          <div className="edit-title">编辑修改</div>
            <BasicInfo actions={actions} fetchProject={fetchProject}/>
        </div>

      </div>

      )
  }
}
