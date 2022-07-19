import { React } from 'react';
import './App.scss';
import textBox from './components/textBox';

const App = ({ state, actions }) =>
	<div className="App" role="App">
		<div> {textBox({ state, actions })} </div>
		<div>{state.text}</div>
	</div>;

export default App;
