import React from 'react'
import { Field, Form, Control} from 'react-redux-form'
import { connect } from 'react-redux';
import './style.styl'
export default class BasicInfo extends React.Component{
  handleChane(e){
    console.log(e);
  }
  render(){
    return (
        // <Form className="project-form" model="basicInfo">
        //   <Field>
            <div className="basic-block">
              <label>项目名称</label>
              <input className="basic-input" onChange={this.handleChane(e)}/>
            </div>
        //   </Field>
        //   <Field>
        //     <div className="basic-block">
        //       <label>项目版本</label>
        //       <input className="basic-input"/>
        //     </div>
        //   </Field>
        //   <Field>
        //     <div className="basic-block">
        //       <label>开始日期</label>
        //       <input className="basic-input"/>
        //     </div>
        //   </Field>
        //   <Field>
        //     <div className="basic-block">
        //       <label>截止日期</label>
        //       <input className="basic-input"/>
        //     </div>
        //   </Field>
        //   <Field>
        //     <div className="basic-block">
        //       <label>开发周期</label>
        //       <input className="basic-input"/>
        //     </div>
        //   </Field>
        //   <Field>
        //     <div className="basic-block">
        //       <label>项目进度</label>
        //       <input className="basic-input"/>
        //     </div>
        //   </Field>
        // </Form>
      )
  }
}
// export default connect( state => ({ basicInfo: state.project }))(BasicInfo);
