import React, { useState } from 'react';
import './App.css';
import Stopwatch from './features/Stopwatch.jsx';
import StudentInfo from './features/Studentinfo.jsx';
import NavBar from './features/Navbar.jsx';

function App() {
	const [displayedComponent, setDisplayedComponent] = useState('Stopwatch');

	const visibleComponent = componentName => {
		setDisplayedComponent(componentName);
	};

	return (
		<div className='app-container'>
			<NavBar onButtonClick={visibleComponent} />

			<div className='component-container'>
				{displayedComponent === 'Stopwatch' && <Stopwatch />}
				{displayedComponent === 'StudentInfo' && <StudentInfo />}
			</div>
		</div>
	);
}

export default App;
