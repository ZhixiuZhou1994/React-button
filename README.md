# React-button
button向服务器发送请求

-使用npm stall在React-button文件夹目录下下载模块依赖
-运行myserver.js,打开服务器http://localhost:8081/

-使用npm stall在my-new-app文件夹目录下下载模块依赖
-使用npm start打开React项目http://localhost:3000/

# 功能说明
1.handleButtonClickTest
开始界面

 ![image](https://raw.githubusercontent.com/ZhixiuZhou1994/React-button/master/imag/start.png)

模拟请求数据中

 ![image](https://raw.githubusercontent.com/ZhixiuZhou1994/React-button/master/imag/process.png)
 
获得数据

 ![image](https://raw.githubusercontent.com/ZhixiuZhou1994/React-button/master/imag/end.png)
 
 2.修改my-new-app中src下Requestbutton.js
 ```
render(){
    return(
        <div className='button_container'>
        <button
        onClick={this.handleButtonClickTest}
        disabled={!this.state.isClickable}
        >
        {this.state.isClickable ? '点按送出AJAX' : '正在处理中...'}
      </button>
      <h1>{this.state.isClickable ? this.state.mytext : 'Loading ...'}</h1>
        </div>
        )}

```
改成

 ```
 //正式请求数据按钮向http://localhost:8081/请求数据
render(){
    return(
        <div className='button_container'>
        <button
        onClick={this.handleButtonClick}
        disabled={!this.state.isClickable}
        >
        {this.state.isClickable ? '点按送出AJAX' : '正在处理中...'}
      </button>
      <h1>{this.state.isClickable ? this.state.mytext : 'Loading ...'}</h1>
        </div>
        )}

```
# 总结
- 题目
> 使用 React 开发一个 Button 组件, Button 组件具备向服务端发起请求, 并获取数据的能力, 要求在请求响应期间, 用户不能通过 Button 再次发起请求, 在此基础上尽可能的考虑, 需要有完整的 UI 测试, 单元测试, 测试框架使用 jest
 - 用户体验
 - 容错
 - 可复用
 - 扩展性
 
在看到题目的时候，想着要放弃，react框架，测试框架都没有使用过，查看各种参考资料，实现的button,很难达到题目的要求。
但是也让自己有了学习的动力，第一次使用git等，一次很好的开始
 
 
