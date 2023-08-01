import React, { useState } from 'react'
import "../styles/Counter.css";


function Counter() {
	const [counter, setCounter] = useState(0);

	const incrementCounter = () => {
		setCounter(counter + 1);
	}

  return (
		<div className='counter'>
			Counter: {counter}
			<button onClick={incrementCounter}>counter + 1</button>
		</div>
		
	)
}

export default Counter;