import React from 'react'
import {API_URL} from '../../../constant'
import './style.styl'

export default class User extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    const {fetchProject} = this.props.actions
    const token = localStorage.getItem("token")
    fetchProject(`${API_URL}/admin/project?token=${token}`)
  }
  render(){
    if (this.props.project.data._id) {
      this.props.router.replace(`/editproject/${this.props.project.data._id}`)
      localStorage.setItem("id",this.props.project.data._id)
    }
    return (
      <div>
        <div className="search">
          <input className="search-input" placeholder="搜索"/>
          <span className="iconfont icon-Add" onClick={this.handleClick}></span>
        </div>
        <div className="container">
          <table className="users">
            <thead>
              <tr>
                <th className="row-1 row-name">用户名</th>
                <th className="row-2 row-sex">性别</th>
                <th className="row-3 row-birthplace">籍贯</th>
                <th className="row-4 row-role">角色</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0001</td>
                <td>Johnny Five</td>
                <td>Robotin'</td>
                <td>need@input.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      )
  }
}
