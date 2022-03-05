import React, { ChangeEvent } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

type CheckValues<Obj> = {
  [K in keyof Obj]: Obj[K];
};

interface CheckboxListProps {
  checkValues: CheckValues<any>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxList = ({ checkValues, onChange }: CheckboxListProps) => {
  return (
    <div>
      {Object.entries(checkValues).map(([k, v]) => (
        <FormControlLabel
          key={k}
          label={k}
          control={<Checkbox checked={v} onChange={onChange} name={k} />}
        />
      ))}
    </div>
  );
};

export default CheckboxList;
