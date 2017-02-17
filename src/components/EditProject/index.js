import React from 'react'
import { Field, Form, Control} from 'react-redux-form'
import { connect } from 'react-redux';
import BasicInfo from '../ProjectBasicInfo'
import ProjectUI from '../ProjectUI'
import ProjectTime from '../ProjectTime'
import './style.styl'
export default class editProject extends React.Component{
  render(){
    const { actions, projectImages,fetchProjectBasicInfo,projectBasicInfo} = this.props
    return (
      <div className="container">
        <div className="project-detail">
        <div className="edit-title">编辑修改</div>
          <div className="detail-container">
            { projectBasicInfo.end ? null : <BasicInfo actions={actions} fetchProjectBasicInfo={fetchProjectBasicInfo}/>}
            { !projectBasicInfo.end || projectImages.end ? null : <ProjectUI projectImages={projectImages} actions={actions}/> }
            {!projectBasicInfo.end|| projectImages.end ? null : <ProjectTime actions={actions}/>}
          </div>
        </div>
      </div>

      )
  }
}
