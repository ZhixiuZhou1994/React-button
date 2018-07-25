import React from 'react';

class Requestbutton extends React.Component{
constructor(props){ //构造函数
super(props);
this.state = {mytext : '原始数据',isClickable:true}
// this.handleClick = this.handleClick.bind(this);

}

handleButtonClickTest = (e) => {//click测试，请求响应期间button为不可点状态
    this.setState({ isClickable: false })

    const promise = new Promise((resolve, reject) => {
      setTimeout(resolve, 3000)
    })

    promise.then(() => {
      this.setState({ mytext:"获得数据",isClickable: true })
    })
  }

handleButtonClick = (e) =>{ //请求数据函数
this.setState({ isClickable: false });

fetch(`http://127.0.0.1:8081/json`,{
method: 'GET'
})
.then(res =>{
    if(res.ok) {
        res.text().then(
            data => {
            this.setState({mytext:"获得数据"+data,isClickable:true})
            });
    } else {
        this.setState({ isClickable: true })
        console.log("请求不成功，状态码为", res.status);
    }
})

}

// componentWillMount(){
// this.setState({ isLoading: true });

// this.handleClick();
// }

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
        
      
    )
    

}
}


export default Requestbutton;