import React from 'react'
import './style.styl'
import { API_URL } from '../../../constant'
import configureStore from '../../store'
const store = configureStore()
export default class ProjectUI extends React.Component{

  constructor(props) {
    super(props);
    this.state = { basicinfo: {},files: {}}
    this.handleFileSelect = this.handleFileSelect.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    var data = new FormData()
    data.append('design', this.state.files)
    const { fetchProjectImages } = this.props.actions
    const id = localStorage.getItem("projectId")
    const token = localStorage.getItem("token")
    fetchProjectImages(`${API_URL}/admin/project/${id}/design?token=${token}`,data)
  }
  handleFileSelect(event) {
    var files = event.target.files;
    for (var i = 0; i< files.length; i++) {
      var f = files[i]
      this.state.files[i] = f
      var reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
          var span = document.createElement('span');
          span.innerHTML =
          [
            '<img class="project-img" src="',
            e.target.result,
            '" title="',
            '"/>','<div>',theFile.name,'</div>',
          ].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);
      reader.readAsDataURL(f);
    }
  }
  render(){
    return (
        <div className="container">
            <div className="edit-title">编辑修改</div>
                <h3 className="basic-info">UI设计图</h3>
                <input id="UI" type="file" id="files" multiple onChange={this.handleFileSelect}/>
                <output id="list"></output>
                <button className="cancel">上一步</button>
                <button className="login-btn" onClick={this.handleClick}>下一步</button>
        </div>
      )
  }
}
