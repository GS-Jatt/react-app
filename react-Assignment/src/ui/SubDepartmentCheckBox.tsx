import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function SubDepartmentCheckBox({ data, index, checkedSub, setCheckedSub }) {


  const handleChange = (event) => {
    setCheckedSub((subCheck) => subCheck.map((check, ind) => ind === index ? event.target.checked : check));
  };


  return (<FormControlLabel
    label={data}
    control={<Checkbox style={{marginLeft:'10px'}} checked={checkedSub[index]} onChange={handleChange} />}
  />)

}
