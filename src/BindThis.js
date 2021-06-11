import React from 'react';

class BindThis extends React.Component {
	message = '我是组件属性';
	testClick() {
		console.log(this.message);
	}
	render() {
		return <button onClick={this.testClick.bind(this)}>点击按钮</button>;
	}
}

export default BindThis;
