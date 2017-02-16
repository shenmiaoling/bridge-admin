import React from 'react'
import { Field, Form, Control} from 'react-redux-form'
import { connect } from 'react-redux';
import './style.styl'
import configureStore from '../../store'
const store = configureStore()
export default class BasicInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = { basicinfo: {}}
    this.handleChane = this.handleChane.bind(this)
  }
  handleChane(event){
    store.dispatch(this.props.actions.fetchProject())
    console.log(store);
    // console.log(event.target.value);
    // console.log(event.target.name);
    const basicinfo = this.state.basicinfo
    basicinfo[event.target.name] = event.target.value
    const { fetchProject } = this.props.actions
    // this.setState({
    //   basicinfo: basicinfo
    // },()=>{fetchProject('',this.state.basicinfo)})
  }
  render(){
    return (
        <div>
          <div className="basic-block">
            <label>项目名称</label>
            <input className="basic-input" onChange={this.handleChane} name="title"/>
          </div>
          <div className="basic-block">
            <label>项目版本</label>
            <input className="basic-input" onChange={this.handleChane} name="version"/>
          </div>
          <div className="basic-block">
            <label>开始日期</label>
            <input className="basic-input" onChange={this.handleChane} type="date" name="startDate"/>
          </div>
          <div className="basic-block">
            <label>截止日期</label>
            <input className="basic-input" onChange={this.handleChane} type="date" name="endDate"/>
          </div>
          <div className="basic-block">
            <label>开发周期</label>
            <input className="basic-input" onChange={this.handleChane} name="cycle"/>
          </div>
          <div className="basic-block">
            <label>项目进度</label>
            <select className="basic-input" onChange={this.handleChane} name="progression">
              <option value="pending">待处理</option>
              <option value="start">需求阶段</option>
              <option value="going">开发阶段</option>
              <option value="check">反馈阶段</option>
              <option value="finish">已完结</option>
            </select>
          </div>
        </div>
      )
  }
}
// export default connect( state => ({ basicInfo: state.project }))(BasicInfo);
