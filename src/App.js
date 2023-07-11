import { useState } from 'react';
import './App.css';

function App() {
	const [value, setValue] = useState(0);
	const onClick = () => setValue(value + 1);
	return (
		<>
			<div className="App">
				<header className="App-header">
					<input type="number" className="input" placeholder="Number 1"></input>
					<input type="number" className="input" placeholder="Number 2"></input>
					<div className="buttons">
						<button className="button-plus">+</button>
						<button className="button-minus">-</button>
					</div>
					<div className="buttons">
						<button className="button-result" onClick={onClick}>
							Сalculate
						</button>
						<button className="button-clear">C</button>
					</div>
					<div className="result">
						This is result:
						<p>{value}</p>
					</div>
				</header>
			</div>
		</>
	);
}

export default App;
