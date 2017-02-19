import React from 'react'
import { API_URL } from '../../../constant'
import './style.styl'
export default class BasicInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = { schedule: {}}
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(event){
    const schedule = this.state.schedule
    schedule[event.target.name] = event.target.value
    this.setState({
      schedule: schedule
    })
  }
  handleClick(){
    console.log(this.state.schedule)
    // const { fetchProject } = this.props.actions
    // const token = localStorage.getItem("token")
    // fetchProject(`${API_URL}/admin/project?token=${token}`,this.state.basicinfo)
  }
  render(){
    return (
        <div className="container">
          <div className="project-detail">
            <div className="edit-title">编辑修改</div>
            <h3 className="basic-info">时间阶段</h3>
            <div className="basic-block">
              <div className="basic-block">
                <label>待处理</label>
                <input className="basic-input" onChange={this.handleChange} type="date" name="time1"/>
              </div>
              <div className="basic-block">
                <label>需求阶段</label>
                <input className="basic-input" onChange={this.handleChange} type="date" name="time2"/>
                <input className="basic-input" onChange={this.handleChange} type="date" name="time2"/>
              </div>
              <div className="basic-block">
                <label>开发阶段</label>
                <input className="basic-input" onChange={this.handleChange} type="date" name="time3"/>
                <input className="basic-input" onChange={this.handleChange} type="date" name="time3"/>
              </div>
              <div className="basic-block">
                <label>反馈阶段</label>
                <input className="basic-input" onChange={this.handleChange} type="date" name="time4"/>
                <input className="basic-input" onChange={this.handleChange} type="date" name="time4"/>
              </div>
              <div className="basic-block">
                <label>已完结</label>
                <input className="basic-input" onChange={this.handleChange} type="date" name="time5"/>
              </div>
              <div>
                <button className="login-btn" >上一步</button>
                <button className="login-btn" onClick={this.handleClick}>下一步</button>  
              </div>

            </div>
          </div>
        </div>
      )
  }
}
