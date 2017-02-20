import React from 'react'
import './style.styl'
import { API_URL } from '../../../constant'
import configureStore from '../../store'
const store = configureStore()
export default class ProjectUI extends React.Component{

  constructor(props) {
    super(props);
    this.state = { part: false }
    this.handleFileSelect = this.handleFileSelect.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.renderImage = this.renderImage.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddButton = this.handleAddButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleClick(){
    const id = this.props.params.id
    this.props.router.push(`/project/${id}/schedule`)
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
    const { deleteProjectUI } = this.props.actions
    const id = this.props.params.id
    const token = localStorage.getItem("token")
    deleteProjectUI(`${API_URL}/admin/project/${id}/design/${ui_id}?token=${token}`,ui_id)
  }
  handleAddButton(e){
    var myPart = document.querySelector('#add-part');
    var part = myPart.dataset.info
    const { fetchProjectTaskBar } = this.props.actions
    const token = localStorage.getItem("token")
    const id = this.props.params.id
    fetchProjectTaskBar(`${API_URL}/admin/project/${id}/schedule/${part}?token=${token}`)
    this.setState({
      part: !this.state.part
    })
  }
  handleSubmit(e){
    e.preventDefault()
    const { fetchProjectTask } = this.props.actions
    const token = localStorage.getItem("token")
    const id = this.props.projectTask.data[0]._id
    const part = e.target.name
    const Taskform = document.getElementById("task-form")
    Taskform.reset()
    const data = {task:document.getElementById("task").value}
    fetchProjectTask(`${API_URL}/admin/project/${id}/schedule/${part}?token=${token}`,data,Taskform)
  }
  render(){
    console.log(this.props.projectTask)
    return (
        <div className="container">
          <div className="project-detail">
            <div className="edit-title">编辑修改</div>
            <h3 className="basic-info">任务列表</h3>
            <div className="basic-block">
              <label>前端开发:</label>
              <span className="iconfont icon-task" onClick={this.handleAddButton} id="add-part" data-info="frontEnd"></span>
              <form onSubmit={this.handleSubmit} style={{"display":this.state.part?"block":"none"}} name="frontEnd" id="task-form">
                <input type="text" id="task"/>
              </form>
            </div>
            <div className="basic-block">
              <label>后台管理:</label>
              <span className="iconfont icon-task"></span>
            </div>
            <div className="basic-block">
              <label>后端开发:</label>
              <span className="iconfont icon-task"></span>
            </div>
            <div>
              <button className="cancel">上一步</button>
              <button className="login-btn" onClick={this.handleClick}>下一步</button>
            </div>

            </div>

        </div>
      )
  }
}
