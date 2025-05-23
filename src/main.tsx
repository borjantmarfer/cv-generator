import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router/Router'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4347',
      contrastText: '#000',
    },
    info: {
      main: '#1976d2',
    },
    success: {
      main: '#2e7d32',
    },
    warning: {
      main: '#fbc02d',
    },
    background: {
      default: '#E9E9EC',
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#888 transparent',
          scrollbarWidth: 'thin',
        },
        '*::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '*::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          borderRadius: '8px',
          border: 'none',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555',
        },
        '*::-webkit-scrollbar-button': {
          display: 'none',
          width: 0,
          height: 0,
        },
      },
    },
  }

})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </LocalizationProvider>
  </StrictMode>
)
