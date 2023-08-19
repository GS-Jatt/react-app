
import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [name, setname] = useState('Gurneet singh');
    const [pNo, setPNO] = useState('9501062308');
    const [email, setEmail] = useState('gurneetsinghjatt@gmail.com');
    const navigate = useNavigate();
    function onSumit(e) {
      e.preventDefault();
      // setData({ name, pNo, email });
      localStorage.setItem('userData', JSON.stringify({ name, pNo, email }));
      navigate('page2')
    }
    
  
    return (
      <Box sx={{
        position: 'relative',
        // left: '40% ',
        alignContent: "centre",
        border: '1px ',
        width: 300,
        height: 300,
        backgroundColor: '#c2b6b6',
       
      }}>
        <form style={{paddingTop:'40px'}} onSubmit={(e) => onSumit(e)}>
  
          <TextField id="filled-basic" required label="name" value={name} onChange={(e) => setname(e.target.value)} variant="filled" />
          <TextField id="filled-basic" required type="number" label="phone no" value={pNo} onChange={(e) => setPNO(e.target.value)} variant="filled" />
          <TextField id="filled-basic" required type="email" label="email" value={email} onChange={(e) => setEmail(e.target.value)} variant="filled" /><br></br>
          <Button variant="contained"  type="submit">submit</Button>
        </form>
  
      </Box>
    );
  }
  