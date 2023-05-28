import * as React from 'react';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

 {/* custom theme */}
const theme = createTheme({      
  palette: {
    primary: {

      main: '#1c54b2',
    },
    secondary: {

      main: '#b23c17',
    },
  },
});

function App() {
  const [loading, setLoading] = useState(true);
  function handleClick() {
    setLoading(true);
  }

  
  return (


    <ThemeProvider theme={theme}>
<FormControlLabel
        sx={{
          display: 'block',
        }}
        
         {/* this is for switch- toggle the switch to see loading status in different buttons */}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
          
          
      <LoadingButton
        onClick={handleClick}
        loading={loading}
        loadingIndicator="Loading…"
        variant="outlined"
      >
        <span>Fetch data</span>

      </LoadingButton>
      <LoadingButton
        onClick={handleClick}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
      >
        <span>Send</span>

      </LoadingButton>
      <LoadingButton
        color="secondary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        <span>Save</span>

      </LoadingButton>
    </ThemeProvider>

  );
}
export default App;
