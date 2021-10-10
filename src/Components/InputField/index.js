import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  const { value, label, onChange, placeholder, name, variant } = props;
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label={label}
        variant={variant}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Box>
  );
}
