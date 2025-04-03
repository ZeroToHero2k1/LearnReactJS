import React, { useState, useImperativeHandle, forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState('');

  const changeState = () => {
    setInputValue('State đã được thay đổi từ component cha!');
  };

  useImperativeHandle(ref, () => ({
    changeState: changeState,
  }));

  return (
    <div>
      <input type="text" value={inputValue} readOnly />
    </div>
  );
});

export default Input;