import Checkbox from '@mui/material/Checkbox';
import { Box } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect, useState } from "react";
import SubDepartmentCheckBox from './SubDepartmentCheckBox';

export default function IndeterminateCheckbox({ data }) {

    const [checked, setChecked] = useState(false);
    const [checkedSub, setCheckedSub] = useState(data.sub_departments.map(() => false));
    const [isExpanded, setIsExpanded] = useState(false);

    // let unChecker=false;

    useEffect(() => {
        if (!checkedSub.includes(false)) {
            setChecked(true);
            // unChecker = true;
        }
        else setChecked(false);
    }, [checkedSub]);

    useEffect(() => {
        if (checked) {
            setCheckedSub(data.sub_departments.map(() => true));
        }
        //    else if (!checked && !unChecker) setCheckedSub((subChecked)=>subChecked.map((ch)=>ch));
        //    else setCheckedSub(data.sub_departments.map(()=>false))  ;
        //    else {
        //     setCheckedSub((checked)=>checked.map((ch)=>ch));
        //     } 
    }, [checked])

    const handleChange1 = (event) => {
        //   unChecker=event.target.checked;
        if (!checked) {
            setCheckedSub(data.sub_departments.map(() => true));
        } else setCheckedSub(data.sub_departments.map(() => false));

    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {isExpanded? data.sub_departments.map((data, index) => <SubDepartmentCheckBox checkedSub={checkedSub} data={data} index={index} setCheckedSub={setCheckedSub} key={index} />): ''}
        </Box>
    );

    return (
        <div style={{ textAlign:'start',backgroundColor:'#cfc6d8',width:'250px',color:'black' }}>
            <button style={{marginRight:'5px'}} type='button' onClick={()=>setIsExpanded((isExpanded)=>!isExpanded)}>{isExpanded? '-' : '+'}</button>
            <FormControlLabel
                label={data.department}
                control={
                    <Checkbox
                        checked={checked}
                        indeterminate={checked}
                        onChange={handleChange1}
                    />
                }
            />
            {children}
        </div>
    );
}