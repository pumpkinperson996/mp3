import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState<string>('');  
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number | string>('');  

  const handleAddition = () => {
    const parsedNum1 = parseFloat(num1);  
    const parsedNum2 = parseFloat(num2);  
    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      setResult(parsedNum1 + parsedNum2);
    } else {
      setResult('Invalid input');
    }
  };

  const handleSubtraction = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      setResult(parsedNum1 - parsedNum2);
    } else {
      setResult('Invalid input');
    }
  };

  const handleMultiplication = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      setResult(parsedNum1 * parsedNum2);
    } else {
      setResult('Invalid input');
    }
  };

  const handleDivision = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
    if (!isNaN(parsedNum1) && !isNaN(parsedNum2) && parsedNum2 !== 0) {
      setResult(parsedNum1 / parsedNum2);
    } else {
      setResult('Invalid input or division by zero');
    }
  };

  const handleClear = () => {
    setNum1('');  
    setNum2('');  
    setResult('');  
  };

  return (
    <div>
      <h2>Calculator</h2>
      
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}  
        placeholder="First Number"
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}  
        placeholder="Second Number"
      />
      
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      
      <h3>Result: {result}</h3>
    </div>
  );
};

export default Calculator;
