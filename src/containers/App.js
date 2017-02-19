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
  componentDidMount() {
    if(!localStorage.getItem("token")){
      this.props.router.replace('/login')
    }
  }
  render(){
    const { children,...OtherProps} = this.props
    return (
      <div>
        {localStorage.getItem("token") ? <Topbar/> : null}
        {
          children && React.cloneElement(children, {...OtherProps})
        }
        {localStorage.getItem("token") ? <Sidebar/> : null}
      </div>
      )
  }
}
function mapStateToProps(state) {
  return {
    loginForm: state.loginForm,
    project: state.project,
    projectImages: state.projectImages
    }
}

function mapDispatchToProps(dispatch) {
  return{
    actions : bindActionCreators(Actions,dispatch),
    dispatch: dispatch
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(App)
