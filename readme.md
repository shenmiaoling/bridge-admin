
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
### 5.搭建本地环境
// node版本 v4.4.5

```
git clone https://github.com/shenmiaoling/xiaoqiao-admin.git

cd xiaoqiao-admin && npm install

webpack -w

node server.js
```
