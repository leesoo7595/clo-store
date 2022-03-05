import React, { ChangeEvent, KeyboardEvent } from 'react';
import { TextField } from '@mui/material';

interface SearchbarProps {
  id: string;
  name: string;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
}
const Searchbar = ({
  id,
  name,
  label,
  onChange,
  onKeyDown,
  placeholder,
  value,
}: SearchbarProps) => {
  return (
    <TextField
      fullWidth
      id={id}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};

export default Searchbar;
