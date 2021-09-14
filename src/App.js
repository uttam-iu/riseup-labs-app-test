import './resources/styles/style.css';
import TextField from './components/libs/TextField';

function App() {
	const onChange = (name, value) => {
		console.log(name, value)
	}

	return (
		<div className="App">
			<TextField
				name='age'
				label="something"
				type='text'
				onDataChange={onChange}
				value='val'
				isRequired={true}
			// error='error' 
			/>
		</div>
	);
}

export default App;
