import React from 'react'
import './style.styl'
import { API_URL } from '../../../constant'
import configureStore from '../../store'
const store = configureStore()
export default class ProjectUI extends React.Component{

  constructor(props) {
    super(props);
    this.state = { part: false,barid:'',completion:false }
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddButton = this.handleAddButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFinish = this.handleFinish.bind(this)
  }
  handleClick(){
    const id = this.props.params.id
    this.props.router.push(`/project/${id}/schedule`)
  }

  handleDelete(task_id){
    const { deleteProjectTask } = this.props.actions
    const token = localStorage.getItem("token")
    deleteProjectTask(`${API_URL}/admin/project/schedule/task/${task_id}?token=${token}`,task_id)
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
    this.setState({
      barid: this.props.projectTask.taskbar._id
    })
    // const id = this.props.projectTask.taskbar._id
    const id = "58ab106cc7112c1eeeaace54"
    const part = e.target.name
    const Taskform = document.getElementById("task-form")
    const data = {txt:document.getElementById("task").value}
    fetchProjectTask(`${API_URL}/admin/project/schedule/${id}/task?token=${token}`,data,Taskform)
  }
  handleFinish(task_id){
    const { ChangeProjectTaskStatus } = this.props.actions
    const token = localStorage.getItem("token")
    // const id = this.props.projectTask.taskbar._id
    // const id = "58ab106cc7112c1eeeaace54"
    this.setState({
      completion: !this.state.completion
    },()=>{
      const data = {completion:this.state.completion}
      ChangeProjectTaskStatus(`${API_URL}/admin/project/schedule/task/${task_id}?token=${token}`,data)
    })    
  }
  render(){
    const ChangeResult = this.props.projectTask
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
              {
                this.props.projectTask.data.map((item,index)=>{
                  return <div key={index}>
                    <li onClick={this.handleFinish.bind(this,item._id)} style={{"textDecoration":item.completion?"line-through":"none"}}>{item.txt}  <button onClick={this.handleDelete.bind(thid, item._id)}>X</button></li>
                    
                  </div>
                })
              }
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
