import React from 'react'

class Hello extends React.Component {
  clickHandler = () => {
    console.log(666);
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