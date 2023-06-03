import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';
export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert onClose={() => { }} variant="outlined" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert onClose={() => { }} icon={<CheckIcon fontSize="inherit" />} variant="outlined" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}
