import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import Footer from '../components/Footer'
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const { children,...OtherProps} = this.props
    return (
      <div>
      {
          children && React.cloneElement(children, {...OtherProps})
        }
        <Footer/>
      </div>
      )
  }
}
function mapStateToProps(state) {
  return {
    text: state.handleClick.text,
    }
}
//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch) {
  return{
    actions : bindActionCreators(Actions,dispatch)
  }
}
//这里实际上给了AppContainer两个props：text和actions
export default connect(
  mapStateToProps,
  mapDispatchToProps)(App)
