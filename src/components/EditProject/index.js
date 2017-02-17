import React from 'react'
import { Field, Form, Control} from 'react-redux-form'
import { connect } from 'react-redux';
import BasicInfo from '../ProjectBasicInfo'
import ProjectUI from '../ProjectUI'
import './style.styl'
export default class editProject extends React.Component{
  render(){
    const { actions, projectImages,fetchProjectBasicInfo } = this.props
    return (
      <div className="container">
        <div className="project-detail">
        <div className="edit-title">编辑修改</div>
          <div className="detail-container">
            <h3 className="basic-info">基本信息</h3>
            <BasicInfo actions={actions} fetchProjectBasicInfo={fetchProjectBasicInfo}/>
          </div>
        </div>
      </div>

      )
  }
}
