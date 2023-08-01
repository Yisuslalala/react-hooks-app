import React, { useState } from 'react';
import "../styles/UpdateValue.css";

function UpdateValue() {
	const [inputValue, setInputValue] = useState("");
  
	let updateValue = (event) => {
		const newValue = event.target.value;
		setInputValue(newValue);
	};
	
	return (
    <div className='inputValue'>
      updatedValue: 
	  <div>
				{inputValue}
				<input onChange={updateValue} placeholder='Write something'>
			</input>
			</div>
		</div>

  )
}

export default UpdateValue