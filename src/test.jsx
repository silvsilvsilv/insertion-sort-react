import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {

    const[text,setText] = useState([1,2,3,4,5])

    const handleText = (e) =>
    {
        let txt = e.target.value;
        txt = txt.split('')
        setText(txt.join(','))
    }

    return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleText} defaultValue={text}/>
    <div>{text}</div>
    
    </Box>
  );
}