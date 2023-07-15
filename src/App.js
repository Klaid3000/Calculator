import { useState } from 'react';
import styles from './Calculator.module.css';

function App() {
	const [num1, setNum1] = useState('');
	const [num2, setNum2] = useState('');
	const [result, setResult] = useState('');
	const actionPlus = '+';
	const actionMinus = '-';
	const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const [displayColor, setDisplayColor] = useState(false);

	const num1Change = (e) => {
		//console.log(e);
		setNum1(e.target.value);
	};

	const num2Change = (e) => {
		//console.log(e);
		setNum2(e.target.value);
	};

	const handleNumClick = (number) => {
		if (
			result === `${num1} ${actionPlus} ${num2}` ||
			result === `${num1} ${actionMinus} ${num2}`
		) {
			setNum1(number.toString());
			setNum2('');
			setResult('');
		} else if (
			result === 'Введите числа для сложения!' ||
			result === 'Введите числа для вычетания!'
		) {
			setNum1(number.toString());
			setResult('');
		} else {
			if (num1 === '') {
				setNum1(num1 + number.toString());
			} else if (num2 === '') {
				setNum2(number.toString());
			}
		}
	};

	const actionSymbolPlus = () => {
		if (num1 === '' || num2 === '') {
			setResult('Введите числа для сложения!');
		} else {
			setResult(`${num1} ${actionPlus} ${num2}`);
		}

		setDisplayColor(false);
	};

	const actionSymbolMinus = () => {
		if (num1 === '' || num2 === '') {
			setResult('Введите числа для вычетания!');
		} else {
			setResult(`${num1} ${actionMinus} ${num2}`);
		}

		setDisplayColor(false);
	};

	const calculateResult = () => {
		if (result === `${num1} ${actionPlus} ${num2}`) {
			const sum = parseInt(num1) + parseInt(num2);
			setResult(sum);
			setNum1(sum.toString());
			setNum2('');
		} else if (result === `${num1} ${actionMinus} ${num2}`) {
			const difference = parseInt(num1) - parseInt(num2);
			setResult(difference);
			setNum1(difference.toString());
			setNum2('');
		} else {
			setResult('Введите числа для подсчета или выберите операцию!');
		}

		setDisplayColor(true);
	};

	const clear = () => {
		setNum1('');
		setNum2('');
		setResult('');
		setDisplayColor(false);
	};

	return (
		<>
			<div className={styles.app}>
				<header className={styles.appHeader}>
					<div className={styles.buttons}>
						{numberButtons.map((number) => (
							<button
								key={number}
								className={styles.intButton}
								onClick={() => handleNumClick(number)}
							>
								{number}
							</button>
						))}
					</div>
					<input
						type="number"
						className={styles.input}
						placeholder="Number 1"
						value={num1}
						onChange={num1Change}
					></input>
					<input
						type="number"
						className={styles.input}
						placeholder="Number 2"
						value={num2}
						onChange={num2Change}
					></input>
					<div className={styles.buttons}>
						<button
							className={styles.buttonPlus}
							value={actionPlus}
							onClick={actionSymbolPlus}
						>
							+
						</button>
						<button
							className={styles.buttonMinus}
							value={actionMinus}
							onClick={actionSymbolMinus}
						>
							-
						</button>
					</div>
					<div className={styles.buttons}>
						<button className={styles.buttonResult} onClick={calculateResult}>
							=
						</button>
						<button className={styles.buttonClear} onClick={clear}>
							C
						</button>
					</div>
					<div className={styles.result}>
						Result:
						<p className={displayColor ? styles.resultColor : null}>
							{result}
						</p>
					</div>
				</header>
			</div>
		</>
	);
}

export default App;
