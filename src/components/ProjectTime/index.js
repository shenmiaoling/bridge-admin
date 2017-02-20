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
    const id = this.props.params.id
    const token = localStorage.getItem("token")
    this.props.actions.fetchProjectSchedule(`${API_URL}/admin/project/${id}/schedule?token=${token}`,this.state.schedule)
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
                <input className="basic-input" onChange={this.handleChange} type="date" name="time2"/>-
                <input className="basic-input" onChange={this.handleChange} type="date" name="time3"/>
              </div>
              <div className="basic-block">
                <label>开发阶段</label>
                <input className="basic-input" onChange={this.handleChange} type="date" name="time4"/>-
                <input className="basic-input" onChange={this.handleChange} type="date" name="time5"/>
              </div>
              <div className="basic-block">
                <label>反馈阶段</label>
                <input className="basic-input" onChange={this.handleChange} type="date" name="time6"/>-
                <input className="basic-input" onChange={this.handleChange} type="date" name="time7"/>
              </div>
              <div className="basic-block">
                <label>已完结</label>
                <input className="basic-input" onChange={this.handleChange} type="date" name="time8"/>
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
