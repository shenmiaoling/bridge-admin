import React from 'react'
import './style.styl'
export default class User extends React.Component{
  render(){
    console.log(this.props);
    return (
      <div>
        <div className="search">
          <input className="search-input" placeholder="搜索"/>
          <span className="iconfont icon-Add" onClick={()=>{this.props.router.replace("/user")}}></span>
        </div>
        <div className="container">
        </div>
      </div>
      )
  }
}
