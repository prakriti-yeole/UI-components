
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  return (


    <ThemeProvider theme={theme}>

      {/* primary buttons */}
      <Button color="primary" variant="contained">primary buttons</Button>

      {/* disabled buttons */}
      <Button variant="contained" disabled>
        Disabled
      </Button>

      {/* secondary buttons */}
      <Button color="secondary" variant="contained">Secondary</Button>

      {/* error buttons */}
      <Button color="error" variant="outlined" size="md">
        Error
      </Button>

      {/* delete buttons */}
      <Button color="error" variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>

    </ThemeProvider>

  );
}
export default App;
