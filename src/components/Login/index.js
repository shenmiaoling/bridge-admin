import { Field, Form, Control} from 'react-redux-form'
import React from 'react'
import { connect } from 'react-redux';
import { API_URL,PASS } from '../../../constant'
import "./style.styl"
 class ReduxloginForm extends React.Component {
  handleSubmit(val){
    const {fetchLogin} = this.props.actions
    fetchLogin(`${ API_URL }/login`,val)
  }
  render(){
    if (localStorage.getItem("token")) {
      return null
    }
    return (
      <div className="login">
        <Form model="login" onSubmit={(val) => this.handleSubmit(val)} className="login-form">
          <Field model="login.admin" className="login-user">
            <input type="text" className="login-input"/>
          </Field>
          <Field model="login.password" className="login-user">
            <input type="password"  className="login-input"/>
          </Field>
          <div className="login-bottom">
            <button className="login-btn">登录</button>
          </div>
        </Form>
      </div>
      )
  }
}

export default connect(state => ({ login: state.login }))(ReduxloginForm);
