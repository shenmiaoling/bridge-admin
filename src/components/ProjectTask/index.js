import React from 'react'
import './style.styl'
import { API_URL } from '../../../constant'
import { browserHistory } from 'react-router';
const token = localStorage.getItem("token")
export default class ProjectUI extends React.Component{

  constructor(props) {
    super(props);
    this.state = { part: [false,false,false],barid:'',developer:false }
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddButton = this.handleAddButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStatus = this.handleStatus.bind(this)
    this.handleGoback = this.handleGoback.bind(this)
    this.handleDeveloper = this.handleDeveloper.bind(this)
    this.handleAddDeveloper = this.handleAddDeveloper.bind(this)
  }
  componentDidMount() {
    const {fetchDeveloper} = this.props.actions
    fetchDeveloper(`${API_URL}/admin/developer?token=${token}`)
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
    const value = document.querySelector('#task1').value ||document.querySelector('#task2').value||document.querySelector('#task3').value
        console.log(value)
    const { fetchProjectTask } = this.props.actions
    this.setState({
      barid: this.props.projectTask.taskbar._id
    })
    
    // const id = this.props.projectTask.taskbar._id
    const id = "58ac61c0755e4e75dd5351ff"
    const taskForm = document.getElementById("task-form")
    const data = {txt:value}
    fetchProjectTask(`${API_URL}/admin/project/schedule/${id}/task?token=${token}`,data,taskForm)
  }
  handleStatus(item){
    const { ChangeProjectTaskStatus } = this.props.actions
    const data = {completion:!item.completion}
    ChangeProjectTaskStatus(`${API_URL}/admin/project/schedule/task/${item._id}?token=${token}`,data)
  }
  handleDeveloper(){
    this.setState({
      developer: !this.state.developer
    })
  }
  handleAddDeveloper(item,part){
    console.log(this.props);
    const {fetchProjectDeveloper} = this.props.actions
    const id = this.props.params.id
    fetchProjectDeveloper(`${API_URL}/admin/project/${id}/${part}?developer=${item._id}&token=${token}`,item._id)
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
              <span className="iconfont icon-task" onClick={this.handleAddButton} id="add-part" data-info="frontEnd" data-index="0"></span>
              <span className="iconfont icon-avatar" onClick={this.handleDeveloper}></span>
              <form onSubmit={this.handleSubmit} style={{"display":this.state.part[0]?"block":"none"}} id="task-form">
                <input type="text" id="task1"/>
              </form>
              {
                this.props.projectTask.data.map((item,index)=>{
                  return <div key={index}>
                    <li onClick={this.handleStatus.bind(this,item)} style={{"textDecoration":item.completion?"line-through":"none"}}>{item.txt}</li> <button onClick={this.handleDelete.bind(this, item._id)}>X</button>
                  </div>
                })
              }
              <div className={true?"developer":"hide-developer"}>
                {
                  this.props.projectTask.Developer.map((item,index)=>{
                    return <div key={index} onClick={this.handleAddDeveloper.bind(this,item,"frontEnd")}>
                      <img src={item.wxInfo.avatarUrl} className="developer-avatar"/>
                      <div className="developer-name">{item.wxInfo.nickName}</div>
                    </div>
                  })
                }
              </div>
            </div>
            <div className="basic-block">
              <label>后台管理:</label>
              <span className="iconfont icon-task" onClick={this.handleAddButton} id="add-part" data-info="backstage" data-index="1"></span>
              <form onSubmit={this.handleSubmit} style={{"display":this.state.part[1]?"block":"none"}} id="task-form">
                <input type="text" id="task2" onSubmit={this.handleSubmit}/>
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
                <input type="text" id="task3"/>
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
