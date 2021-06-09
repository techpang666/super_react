import React from 'react'

class Hello extends React.Component {
  // constructor() {
  //   super()
  //   this.demo = 'dddd'
  // }
  // 上面可以简写成下面就可以了
  demo = 'dddd'
  clickHandler = () => {
    console.log('触发了', this.demo);
  }
  clickTest = function () {
    console.log('触发了', this.demo);
  }
  render () {
    return (
      <div>
        这是类组件的内容
        <button onClick={this.clickHandler}>测试按钮</button>
        <button onClick={() => {this.clickTest()}}>另一种处理this的方案</button>
      </div>
    )
  }
}

export default Hello