import { Field, Form, Control} from 'react-redux-form'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
 class LoginForm extends React.Component {
  handleSubmit(val){
    const {fetchLogin} = this.props
    fetchLogin(api,val)
  }
  render(){
    const {fetchLogin} = this.props
    if (!true) {
      return null
    }
    return (
      <div>
        <Form model="login" onSubmit={(val) => this.handleSubmit(val)}>
          <Field model="login.username">
            <input type="text"/>
          </Field>
          <Field model="login.password">
            <input type="password" />
          </Field>
          <button className="login-btn">登录</button>
        </Form>
      </div>
      )
  }
}

export default connect(state => ({ login: state.login }))(LoginForm);
