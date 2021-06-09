import React from 'react'

class Hello extends React.Component {
  constructor() {
    super()
    this.demo = 'dddd'
  }
  // 上面可以简写成下面就可以了
  demo = 'dddd'
  clickHandler = () => {
    console.log('触发了', this.demo);
  }
  render () {
    return (
      <div>
        这是类组件的内容
        <button onClick={this.clickHandler}>测试按钮</button>
      </div>
    )
  }
}

export default Hello