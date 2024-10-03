import React from 'react';

const NavBar = ({ onButtonClick }) => {
	return (
		<div className='nav-bar'>
			<button onClick={() => onButtonClick('Stopwatch')}>Stopwatch</button>
			<button onClick={() => onButtonClick('StudentInfo')}>Student Info</button>
		</div>
	);
};

export default NavBar;
