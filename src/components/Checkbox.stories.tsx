import React, { ChangeEvent, useState } from 'react';
import Button from '@mui/material/Button';
import CheckboxList from './CheckboxList';

export default {
  component: CheckboxList,
  title: 'Components/CheckboxList',
};

export const BasicCheckboxList = () => {
  const [checkList, setCheckList] = useState({
    A: true,
    B: false,
    C: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckList({
      ...checkList,
      [e.target.name]: e.target.checked,
    });
  };

  const handleClickReset = () => {
    setCheckList({
      A: false,
      B: false,
      C: false,
    });
  };

  return (
    <div>
      <CheckboxList checkValues={checkList} onChange={handleChange} />
      <Button onClick={handleClickReset}>Reset</Button>
    </div>
  );
};
