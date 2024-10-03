import React from 'react';

const SomeList = ({ values, onReset }) => {
	return (
		<div
			className='somelist-container'
			style={{ textAlign: 'center', marginTop: '20px' }}
		>
			<h3>Список времени</h3>
			<ul>
				{values.map((value, index) => (
					<li key={index}>{value}</li>
				))}
			</ul>
			<button onClick={onReset}>Reset</button>
		</div>
	);
};

export default SomeList;
