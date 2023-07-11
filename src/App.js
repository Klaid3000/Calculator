import './App.css';

function App() {
	return (
		<>
			<div className="App">
				<header className="App-header">
					<input type="number" className="input" placeholder="Number 1"></input>
					<input type="number" className="input" placeholder="Number 2"></input>
					<div className="buttons">
						<button className="button-sum">+</button>
						<button className="button-minus">-</button>
					</div>
					<div className="buttons">
						<button className="button-result">Сalculate</button>
						<button className="button-clear">C</button>
					</div>
					<div className="result">
						This is result:
						<p>42</p>
					</div>
				</header>
			</div>
		</>
	);
}

export default App;
