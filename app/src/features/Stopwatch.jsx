import React, { useState, useEffect } from 'react';
import SomeList from '../../../../ex2/first/src/features/Somelist';

const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(true);
	const [timeValues, setTimeValues] = useState([]);

	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setTime(prevTime => prevTime + 1);
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [isRunning]);

	const handleAdd = () => {
		setTimeValues(prevValues => [...prevValues, formatTime(time)]);
	};

	const handleReset = () => {
		setTimeValues([]);
	};

	const formatTime = seconds => {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const remainingSeconds = seconds % 60;
		return `${hours < 10 ? '0' : ''}${hours}:${
			minutes < 10 ? '0' : ''
		}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	};

	return (
		<div style={{ textAlign: 'center', marginTop: '50px' }}>
			<h1>Stopwatch</h1>
			<h2>{formatTime(time)}</h2>
			<button onClick={handleAdd}>Add</button>
			<SomeList values={timeValues} onReset={handleReset} />
		</div>
	);
};

export default Stopwatch;
