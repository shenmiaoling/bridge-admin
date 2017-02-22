
### 1.项目数据结构
##### 登录模块

项目登录时登录名和登录密码传给 actions 中的 fetchLogin 方法，登录成功会返回一个 token，token 则存储在localStorage里面以便随时使用。
##### 添加项目
###### 添加项目基本信息
项目基本信息组件（ProjectBasicInfo）由多个 input 组成，出发 input 的 onChange 方法将每个输入框的输入值赋给 basicinfo，basicinfo 传给 actions 的 fetchProject 来发送给服务器
###### 添加项目 UI 设计图
在 ProjectUI 组件定义 renderImages 为发送单张图片的流程， renderImages 调用 actions 的 fetchProjectImages 方法并将 key 为 design，值为 所选文件发送给服务器，把这个方法放在多张图片的循环里面就做到了一次选择多张并同时上传。
###### 删除项目 UI 设计图
删除其中一张以上传的图片最重要的是知道选中的图片 id ，所以在渲染图片的时候就在每张图片的上传按钮里绑定了图片 id ，handleDelete 处理删除图片成功的同时通过 this.props.dispatch({type:'DELETE_PROJECT_UI_SUCCESS',id:ui_id}) 可以重新获得当前已上传图片，使渲染及时。
###### 添加项目时间阶段
项目时间分为五个时间，第一个和最后一个为单个时间，第二、三、四个时间为两个时间组成的数组，选取时间采用类型为date的input标签，添加项目时间的 ProjectTime 这个组件里面，点击下一步按钮触发 handleClick 方法里面调用 actions 的 fetchProjectSchedule 给服务器发出项目的五个时间。
###### 添加项目任务列表
- 任务的添加分为三个模块，分别给前端开发，后台管理，后端开发添加各自的任务
  - 点击添加任务按钮会去调用  actions 这种的 fetchProjectTaskBar 方法，传入当前点击的所属模块(frontEnd/backstage/backEnd)，然后返回所属模块 id 才能添加该模块的任务。
  - 添加任务的表单触发 handleSubmit 函数，里面调用 actions 的 fetchProjectTask 方法，传入 {txt:value} ,txt 代表任务的内容，对应的 value 为输入框输入的值。添加成功返回结果给 projectTask ,从而渲染显示出刚添加的任务
  - 点击任务改变任务的完成状态，handleStatus 方法调用 ChangeProjectTaskStatus 方法，带着任务的状态 completion 给服务器
  - 点击任务旁的按钮删除一条任务，handleDelete 方法调用的 deleteProjectTask 重要的是传入当前点击任务的 id 
- 给任务的添加开发者
  - 获取开发者在 componentDidMount 就获取到，点击添加开发者按钮就把开发者(this.props.projectTask.Developer) 渲染出来。
###### 添加项目开发文档
项目开发文档用到 Draft 的富文本编辑器，提交时 handleClicke 调用 fetchProjectDocument 方法把 editorState 发送给服务器
### 5.搭建本地环境
// node版本 v4.4.5

```
git clone https://github.com/shenmiaoling/xiaoqiao-admin.git

cd xiaoqiao-admin && npm install

webpack -w

node server.js
```
