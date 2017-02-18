import React from 'react'
import { API_URL } from '../../../constant'
import './style.styl'
export default class BasicInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = { basicinfo: {}}
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(event){
    const basicinfo = this.state.basicinfo
    basicinfo[event.target.name] = event.target.value
    this.setState({
      basicinfo: basicinfo
    })
  }
  handleClick(){
    const { fetchProject } = this.props.actions
    const token = localStorage.getItem("token")
    fetchProject(`${API_URL}/admin/project?token=${token}`,this.state.basicinfo)
  }
  render(){
    return (
        <div>
        <h3 className="basic-info">基本信息</h3>
          <div className="basic-block">
            <label>项目名称</label>
            <input className="basic-input" onChange={this.handleChange} name="title"/>
          </div>
          <div className="basic-block">
            <label>项目版本</label>
            <input className="basic-input" onChange={this.handleChange} name="version"/>
          </div>
          <div className="basic-block">
            <label>开始日期</label>
            <input className="basic-input" onChange={this.handleChange} type="date" name="startDate"/>
          </div>
          <div className="basic-block">
            <label>截止日期</label>
            <input className="basic-input" onChange={this.handleChange} type="date" name="endDate"/>
          </div>
          <div className="basic-block">
            <label>开发周期</label>
            <input className="basic-input" onChange={this.handleChange} name="cycle" type="number"/>
          </div>
          <div className="basic-block">
            <label>项目进度</label>
            <select className="basic-input" onChange={this.handleChange} name="progression">
              <option value="pending">待处理</option>
              <option value="start">需求阶段</option>
              <option value="going">开发阶段</option>
              <option value="check">反馈阶段</option>
              <option value="finish">已完结</option>
            </select>
          </div>
          <button className="cancel">取消</button>
          <button className="login-btn" onClick={this.handleClick}>下一步</button>
        </div>
      )
  }
}
