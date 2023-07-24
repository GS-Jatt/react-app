import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckB({data ,index ,checkedSub ,setCheckedSub }){
  

    const handleChange = (event) => {
      setCheckedSub((ch)=>ch.map((che,ind)=>ind===index?event.target.checked:che));
    };
  
    
    return (<FormControlLabel
      label={data}
      control={<Checkbox checked={checkedSub[index]} onChange={handleChange} />}
    />)
  
  }
  