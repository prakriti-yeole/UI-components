import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
const PrettoSlider = styled(Slider)({
  color: "primary",
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#1c54b2',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});


export default function SliderSizes() {
  return (

    <Box width={300}>
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom> default contineous slider </Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom> default discrete slider </Typography>
      <Slider defaultValue={50}
        step={10} marks min={10} max={110}
        sx={{
          width: 200,
          color: 'secondary.main',
          '& .MuiSlider-thumb': {
            borderRadius: '1px',
          },
        }}
        aria-label="Default" valueLabelDisplay="on" />
    </Box >
  );
}
