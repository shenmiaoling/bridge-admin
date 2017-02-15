import React, {Component} from 'react'
import {Link} from 'react-router'
import "./style.styl"
export default class Footer extends Component {
  render(){
    const activeStyle = {backgroundColor: '#191919'}
    return (
      <div className="side">
        <img className="logo" src="./images/logo.png"/>
        <div className="head">小桥后台管理</div>
        <div className="side-title">
        <Link to="/user" activeStyle={activeStyle}>
          <p className="side-info">用户管理</p>
        </Link>
        <Link to="/project" activeStyle={activeStyle}>
          <p className="side-info">项目管理</p>
        </Link>
        <Link to="/developer" activeStyle={activeStyle}>
          <p className="side-info">开发人员</p>
        </Link>
        <Link to="/custom" activeStyle={activeStyle}>
          <p className="side-info">客户管理</p>
        </Link>
        </div>
      </div>
      )
  }
}
