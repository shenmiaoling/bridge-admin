import React from 'react'
import './style.styl'

export default class ProjectUI extends React.Component{

  constructor(props) {
    super(props);
    this.state = { basicinfo: {},files: []}
    this.handleFileSelect = this.handleFileSelect.bind(this)
  }

  handleFileSelect(event) {
    var files = event.target.files;
    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0; i< files.length; i++) {
      var f = files[i]
      var reader = new FileReader();
      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
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
    return (
        <div>
          <div className="project-ui">
            <label>+</label>
            <input type="file" id="files" multiple onChange={this.handleFileSelect}/>
            <output id="list"></output>
{/*            <div>
                <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop} >
                    <button type="button" onClick={this.onOpenClick}>
                    Open Dropzone
                </button>
                </Dropzone>
                {this.state.files.length > 0 ? <div>
                <h2>Uploading {this.state.files.length} files...</h2>
                <div>{this.state.files.map((file,index) => <img key={index} src={file.preview} /> )}</div>
                </div> : null}*/}
{/*            </div>*/}
          </div>
        </div>
      )
  }
}
