import React, { ChangeEvent, useState } from 'react';
import Searchbar from './Searchbar';

export default {
  component: Searchbar,
  title: 'Components/Searchbar',
};

export const BasicSearchbar = () => {
  const [input, setInput] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Searchbar
      id="basic"
      name="basic"
      label="basic"
      onChange={handleChange}
      value={input}
    />
  );
};
