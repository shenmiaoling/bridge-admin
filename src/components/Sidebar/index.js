import React, {Component} from 'react'
import "./style.styl"
export default class Footer extends Component {
  render(){
    return (
      <div className="side">
        <img className="logo" src="./images/logo.png"/>
        <div className="head">小桥后台管理</div>
        <div className="side-title">
          <p className="side-info">用户管理</p>
          <p className="side-info">项目管理</p>
          <p className="side-info">用户管理</p>
          <p className="side-info">用户管理</p>
        </div>
      </div>
      )
  }
}
