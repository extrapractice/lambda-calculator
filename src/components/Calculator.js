import React, { useState } from 'react';
import { numbers, operators, specials } from '../data';
import '../App.scss';
import math from '../math';

const Calculator = (props) => {
	const [ mathString, setMathString ] = useState('');
	const [ result, setResult ] = useState(0);
	const [ current, setCurrent ] = useState('0');
	const [ display, setDisplay ] = useState('');
	const [ lastOp, setLastOp ] = useState('');
	const [ lastNum, setLastNum ] = useState('0');

	const operationHandler = (e) => {
		const operator = e.target.value;

	};

	function addToString(e){
		let value = e.target.value;
		if (value === "="){
			setDisplay(math.eval(display))
		} else{
			setDisplay((prev) => prev + value)
		}
		
	}

	const specialClick = (e) => {
		const val = e.target.value;
		if(val === "C"){
			setDisplay('')
		} else if (val === "+/-") {
			if(display.slice(0) === "-"){
				setDisplay(prev => prev.substr(1))
			} else {
				setDisplay(prev => "-" + prev )
			}
		} else{
			if(val === "%"){
				setDisplay(prev => math.evaluate(`${prev} / 100`))
			}
		} 
	};

	// STEP 2 - add the imported data to state
	return (
		<div className="container">
			
			<div className="display">{display}</div>;
			<div className="buttonsContainer">
			<section className="col-1"> 
				{specials.map((special, idx) => {
					return (
						<button onClick={specialClick} value={special} id="specials" className="button">
							{special}
						</button>
					);
				})}
				{numbers.map((num, idx) => {
					return (
						<button onClick={addToString} value={num} className="button">
							{num}
						</button>
					);
				})}
			</section>
			<section className="col-2">
			<div>
				{operators.map((operator, idx) => {
					return (
						<button onClick={addToString} value={operator.value} className="opButton">
							{operator.char}
						</button>
					);
				})}
			</div>
			</section>
			</div>
		</div>
	);
};

export default Calculator;