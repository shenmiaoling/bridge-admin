import React from 'react'
import './style.styl'
import { API_URL } from '../../../constant'
import configureStore from '../../store'
const store = configureStore()
export default class ProjectUI extends React.Component{

  constructor(props) {
    super(props);
    this.state = { basicinfo: {},files: []}
    this.handleFileSelect = this.handleFileSelect.bind(this)
  }

  handleFileSelect(event) {
    var files = event.target.files;
    console.log(event.target.files[0]);
    for (var i = 0; i< files.length; i++) {
      var f = files[i]
      var data = new FormData()
      data.append('design', f)
      const { fetchProjectImages } = this.props.actions
      const id = localStorage.getItem("projectId")
      const token = localStorage.getItem("token")
      fetchProjectImages(`${API_URL}/admin/project/${id}/design?token=${token}`,data)

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

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }
  render(){
          console.log(this.props.projectImages);
    return (
        <div>
          <div className="project-ui">
            <label>+</label>
            <input type="file" id="files" multiple onChange={this.handleFileSelect}/>
            <output id="list"></output>
          </div>
        </div>
      )
  }
}
