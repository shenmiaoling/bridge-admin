import React from 'react'
import { API_URL } from '../../../constant'
import './style.styl'
export default class BasicInfo extends React.Component{
  constructor(props) {
    super(props);

  }

  handleClick(){
    // const { fetchProjectBasicInfo } = this.props.actions
    // const token = localStorage.getItem("token")
    // const id = localStorage.getItem("projectId")
    // fetchProjectBasicInfo(`${API_URL}/admin/project/${id}/change?token=${token}`,this.state.basicinfo)
  }
  render(){
    return (
        <div>
        <h3 className="basic-info">任务列表</h3>
          <div className="basic-block">
          <button className="login-btn" onClick={this.handleClick}>保存</button>
            <button className="cancel">取消</button>
            </div>
        </div>
      )
  }
}
