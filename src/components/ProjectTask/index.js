import React from 'react'
import './style.styl'
import { API_URL } from '../../../constant'
import { browserHistory } from 'react-router';
const token = localStorage.getItem("token")
export default class ProjectUI extends React.Component{

  constructor(props) {
    super(props);
    this.state = { part: [false,false,false],barid:'',completion:false }
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddButton = this.handleAddButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStatus = this.handleStatus.bind(this)
    this.handleGoback = this.handleGoback.bind(this)
    this.handleDeveloper = this.handleDeveloper.bind(this)
  }
  handleClick(){
    const id = this.props.params.id
    this.props.router.push(`/project/${id}/document`)
  }
  handleGoback(){
    const id = this.props.params.id
    browserHistory.push(`/project/${id}/schedule`)
  }
  handleDelete(task_id){
    const { deleteProjectTask } = this.props.actions
    deleteProjectTask(`${API_URL}/admin/project/schedule/task/${task_id}?token=${token}`,task_id)
  }
  handleAddButton(e){
    var part = e.target.dataset.info
    var index = e.target.dataset.index
    const { fetchProjectTaskBar } = this.props.actions
    const id = this.props.params.id
    fetchProjectTaskBar(`${API_URL}/admin/project/${id}/schedule/${part}?token=${token}`)
    const parts = this.state.part
    parts[index] = !parts[index]
    this.setState({part: parts})
  }
  handleSubmit(e){
    e.preventDefault()
    const { fetchProjectTask } = this.props.actions
    this.setState({
      barid: this.props.projectTask.taskbar._id
    })
    // const id = this.props.projectTask.taskbar._id
    const id = "58ab9474c7112c1eeeaaceb2"
    const taskForm = document.getElementById("task-form")
    const data = {txt:document.getElementById("task").value}
    fetchProjectTask(`${API_URL}/admin/project/schedule/${id}/task?token=${token}`,data,taskForm)
  }
  handleStatus(item){
    const { ChangeProjectTaskStatus } = this.props.actions
    const data = {completion:!item.completion}
    console.log(item);
    ChangeProjectTaskStatus(`${API_URL}/admin/project/schedule/task/${item._id}?token=${token}`,data)
  }
  handleDeveloper(){
    const {fetchDeveloper} = this.props.actions
    fetchDeveloper(`${API_URL}/admin/developer?token=${token}`)
  }
  render(){
    // console.log(this.props);
    const ChangeResult = this.props.projectTask
    return (
        <div className="container">
          <div className="project-detail">
            <div className="edit-title">编辑修改</div>
            <h3 className="basic-info">任务列表</h3>
            <div className="basic-block">
              <label>前端开发:</label>
              <span className="iconfont icon-task" onClick={this.handleAddButton} id="add-part" data-info="frontEnd" data-index="0"></span>
              <span className="iconfont icon-avatar" onClick={this.handleDeveloper}></span>
              <form onSubmit={this.handleSubmit} style={{"display":this.state.part[0]?"block":"none"}} id="task-form">
                <input type="text" id="task"/>
              </form>
              {
                this.props.projectTask.data.map((item,index)=>{
                  return <div key={index}>
                    <li onClick={this.handleStatus.bind(this,item)} style={{"textDecoration":item.completion?"line-through":"none"}}>{item.txt}</li> <button onClick={this.handleDelete.bind(this, item._id)}>X</button>
                  </div>
                })
              }
            </div>
            <div className="basic-block">
              <label>后台管理:</label>
              <span className="iconfont icon-task" onClick={this.handleAddButton} id="add-part" data-info="backstage" data-index="1"></span>
              <form onSubmit={this.handleSubmit} style={{"display":this.state.part[1]?"block":"none"}} id="task-form">
                <input type="text" id="task"/>
              </form>
              {
                this.props.projectTask.backStage.map((item,index)=>{
                  return <div key={index}>
                    <li onClick={this.handleStatus.bind(this,item)} style={{"textDecoration":item.completion?"line-through":"none"}}>{item.txt}  <button onClick={this.handleDelete.bind(this, item._id)}>X</button></li>
                  </div>
                })
              }
            </div>
            <div className="basic-block">
              <label>后端开发:</label>
              <span className="iconfont icon-task" onClick={this.handleAddButton} id="add-part" data-info="backstage" data-index="2"></span>
              <form onSubmit={this.handleSubmit} style={{"display":this.state.part[2]?"block":"none"}} id="task-form">
                <input type="text" id="task"/>
              </form>
              {
                this.props.projectTask.data.map((item,index)=>{
                  return <div key={index}>
                    <li onClick={this.handleStatus.bind(this,item._id)} style={{"textDecoration":item.completion?"line-through":"none"}}>{item.txt}  <button onClick={this.handleDelete.bind(this, item._id)}>X</button></li>
                  </div>
                })
              }
            </div>
            <div>
              <button className="cancel" onClick={this.handleGoback}>上一步</button>
              <button className="login-btn" onClick={this.handleClick}>下一步</button>
            </div>

            </div>

        </div>
      )
  }
}
