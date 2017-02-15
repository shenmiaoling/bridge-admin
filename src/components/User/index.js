import React from 'react'
import './style.styl'

export default class User extends React.Component{
  render(){
    return (
      <div>
        <div className="search">
          <input className="search-input" placeholder="搜索"/>
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
