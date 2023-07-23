import { Box, TextField, Typography, Button, lighten } from "@mui/material";
import { useEffect, useState } from "react";
// import {DataGrid} from '@mui';
import { DataGrid } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';

import FormControlLabel from '@mui/material/FormControlLabel';



function App() {
  const [userData, setUserData] = useState('');

  return (
    <>
      {
        !userData ? <Form setData={setUserData}></Form>
          : <><Table></Table> <Com2></Com2></>


      }
    </>
  )
}

export default App

function Form({ setData }) {
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

function Table() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "userId", headerName: "User ID", width: 70 },
    { field: "title", headerName: "Title", width: 400 },
    { field: "body", headerName: "Body", width: 600 },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const da = await fetch("https://jsonplaceholder.typicode.com/posts")
      const datas = await da.json();
      setData(datas);
    }
    getData();
  }, []
  )

  return (
    <Box sx={{ height: 680, width: "100%", px: [2, 3], py: [2, 3] }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  )
}

function Com2() {
  const data = [
    {
      department: "customer_service",
      sub_departments: [
        "support",
        "customer_success"
      ]
    },
    {
      department: "design",
      sub_departments: [
        "graphic_design",
        "product_design",
        "web_design"
      ]
    }
  ];


  return data.map((da)=><IndeterminateCheckbox data={da}/>)
}

function CheckB({data ,index ,setChecked ,checked}){
  const handleChange = (event) => {
    setChecked(checked[index]=event.target.checked);
    [event.target.checked, checked[index]]
  };
  return (<FormControlLabel
    label={data}
    control={<Checkbox checked={checked[index]} onChange={handleChange} />}
  />)

}

function IndeterminateCheckbox( {data}) {
  
  const [checked, setChecked] = useState([]);
  useEffect(()=>{
    data.sub_departments.forEach((e)=>checked.push(false));

  },[])

  const handleChange1 = (event) => {
    setChecked(data.sub_departments.map((e)=>true));
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      {data.sub_departments.map((data,index)=><CheckB checked={checked} data={data} index={index} setChecked={setChecked} key={index}/>)}
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label={data.department}
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
}