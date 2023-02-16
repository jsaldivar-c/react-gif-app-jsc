import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 2) return;
		onNewCategory(inputValue.trim())
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      {/* </form><form onSubmit={(event) => onSubmit(event)}> */}
      <input
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
