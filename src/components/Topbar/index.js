import React , { Component }from 'react'
import "./style.styl"
export default class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="position">位置：<span>用户管理</span></div>
        <div className="username">用户名</div>
      </div>
    )
  }
}
