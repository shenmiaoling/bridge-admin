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
    console.log(this.props.location.pathname);
    const { children,...OtherProps} = this.props
    return (
      <div>
        {localStorage.getItem("token")||this.props.location.pathname==="/editproject"?<Topbar/>:null}
        {
          children && React.cloneElement(children, {...OtherProps})
        }
        {localStorage.getItem("token")?<Sidebar/>:null}
      </div>
      )
  }
}
function mapStateToProps(state) {
  return {
    loginForm: state.loginForm,
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
