import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';




function App() {
  return (

    <div>


      {/* primary buttons */}
      <Button
        size="md"
        color="primary" variant="contained"
      >primary buttons</Button>

      {/* disabled buttons */}
      <Button variant="contained" disabled>
        Disabled
      </Button>

      {/* secondary buttons */}
      <Button color="secondary" variant="contained">Secondary</Button>

      {/* error buttons */}
      <Button color="error" variant="outlined" size="large">
        Error
      </Button>

      {/* delete buttons */}
      <Button color="error" variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>

    </div>
  );
}
export default App;
