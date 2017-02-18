import React from 'react'
import './style.styl'
import { API_URL } from '../../../constant'
import configureStore from '../../store'
const store = configureStore()
export default class ProjectUI extends React.Component{

  constructor(props) {
    super(props);
    this.state = { basicinfo: {}}
    this.handleFileSelect = this.handleFileSelect.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.renderImage = this.renderImage.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleClick(){
    // var data = new FormData()
    // data.append('design', this.state.files)
    // const { fetchProjectImages } = this.props.actions
    // const id = localStorage.getItem("projectId")
    // const token = localStorage.getItem("token")
    // fetchProjectImages(`${API_URL}/admin/project/${id}/design?token=${token}`,data)
  }
  handleFileSelect(event) {
    var files = event.target.files;
    for (var i = 0; i< files.length; i++) {
      this.renderImage(files[i])
    }
  }
  renderImage(file){
    const id = this.props.params.id
    const token = localStorage.getItem("token")
    const formData = new FormData()
    formData.append('design',file)
    this.props.actions.fetchProjectImages(`${API_URL}/admin/project/${id}/design?token=${token}`,formData)
    const reader = new FileReader()
    // reader.onload = (event)=>{
    //   this.setState({
    //     images:this.state.images.concat([this.props.projectImages.data])
    //   })
    // }
    reader.readAsDataURL(file)
  }
  handleDelete(ui_id){
    console.log(ui_id);
    const { deleteProjectUI } = this.props.actions
    const id = this.props.params.id
    const token = localStorage.getItem("token")
    // deleteProjectUI(`${API_URL}/admin/project/${id}/design/${ui_id}?token=${token}`)
    store.dispatch({type:'DELETE_PROJECT_UI_SUCCESS',id:ui_id})
  }
  render(){
    console.log(this.props);
    return (
        <div className="container">
          <div className="project-detail">
            <div className="edit-title">编辑修改</div>
                <h3 className="basic-info">UI设计图</h3>
                <input id="UI" type="file" id="files" multiple onChange={this.handleFileSelect}/>
                {
                  this.props.projectImages.data.map((item,index)=>{
                    return <div key={index} className="project-image">
                      <img className="project-img" src={item.designUrl}/>
                      <span className="iconfont icon-delete" onClick={this.handleDelete.bind(this,item._id)}></span>
                      <div className="image-name">{item.filename}</div>
                    </div>
                  })
                }
              <div>
                <button className="cancel">上一步</button>
                <button className="login-btn" onClick={this.handleClick}>下一步</button>
              </div>

            </div>

        </div>
      )
  }
}
