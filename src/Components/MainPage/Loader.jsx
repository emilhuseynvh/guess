import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader({ admin }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        backgroundColor: admin ? '#2D2D30' : 'white',
      }}
    >
      <CircularProgress sx={{ color: admin ? '#5C67F7' : 'black' }} />
    </Box>
  );
}
