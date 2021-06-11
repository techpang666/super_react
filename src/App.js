import TestComponent from './TestComponent';
import JSXDemo from './JSXDemo';
import JSXFor from './JSXFor';
import JSXStyle from './JSXStyle';
import Hello from './Hello';
import BindThis from './BindThis';

function App() {
	return (
		<div className="App">
			<Hello></Hello>
			<TestComponent></TestComponent>
			<JSXDemo></JSXDemo>
			<JSXFor></JSXFor>
			<JSXStyle></JSXStyle>
			<BindThis></BindThis>
		</div>
	);
}

export default App;
