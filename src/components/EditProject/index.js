import React from 'react'
import { Field, Form, Control} from 'react-redux-form'
import { connect } from 'react-redux';
import BasicInfo from '../ProjectBasicInfo'
import './style.styl'
export default class editProject extends React.Component{
  render(){
    const {actions} = this.props
    return (
      <div className="project-detail">
        <h3 className="basic-info">基本信息</h3>
        <BasicInfo actions={actions}/>
      </div>
      )
  }
}
