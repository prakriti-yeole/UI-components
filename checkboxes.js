import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
const labelStyles = {
  color: 'red',
  fontWeight: 'bold',
};
export default function Checkboxes() {
  return (

    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Default" />
      <FormControlLabel required control={<Checkbox />} label={
        <Typography sx={labelStyles}>
          Required
        </Typography>
      } />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      <FormControlLabel disabled checked control={<Checkbox />} label="Disabled & Checked" />
    </FormGroup>
  );
}
