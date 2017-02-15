import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const id = localStorage.getItem("id")
    const { children,...OtherProps} = this.props
    return (
      <div>
        {localStorage.getItem("token") && this.props.location.pathname !== `/editproject/${id}` ? <Topbar/> : null}
        {
          children && React.cloneElement(children, {...OtherProps})
        }
        {localStorage.getItem("token") && this.props.location.pathname !== `/editproject/${id}` ? <Sidebar/> : null}
      </div>
      )
  }
}
function mapStateToProps(state) {
  return {
    loginForm: state.loginForm,
    project: state.project,
    }
}

function mapDispatchToProps(dispatch) {
  return{
    actions : bindActionCreators(Actions,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(App)
