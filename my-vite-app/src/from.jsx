
import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function Form({ setData }) {
    const [name, setname] = useState('');
    const [pNo, setPNO] = useState('');
    const [email, setEmail] = useState('');
    function onSumit(e) {
      e.preventDefault();
      setData({ name, pNo, email });
      localStorage.setItem('userData', { name, pNo, email }.toString());
    }
  
    return (
      <Box sx={{
        position: 'relative',
        left: '40% ',
        alignContent: "centre",
        border: '1px ',
        width: 300,
        height: 300,
        backgroundColor: '',
        '&:hover': {
          backgroundColor: '',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
        <form onSubmit={(e) => onSumit(e)}>
  
          <TextField id="filled-basic" label="name" value={name} onChange={(e) => setname(e.target.value)} variant="filled" />
          <TextField id="filled-basic" type="number" label="phone no" value={pNo} onChange={(e) => setPNO(e.target.value)} variant="filled" />
          <TextField id="filled-basic" type="email" label="email" value={email} onChange={(e) => setEmail(e.target.value)} variant="filled" /><br></br>
          <Button variant="contained" type="submit">submit</Button>
        </form>
  
      </Box>
    );
  }
  