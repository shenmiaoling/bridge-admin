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
    const { children,...OtherProps} = this.props
    return (
      <div>
        <Topbar/>
        {
          children && React.cloneElement(children, {...OtherProps})
        }
        <Sidebar/>
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
