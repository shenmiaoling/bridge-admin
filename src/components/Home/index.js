import React from 'react'
import Search from '../Search'
import './style.styl'

export default class Home extends React.Component{
  render(){
    return (
      <div>
        <div className="search">
          <input className="search-input"/>
        </div>
      </div>
      )
  }
}
