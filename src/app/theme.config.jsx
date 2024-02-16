import { createTheme } from '@mui/material/styles';

export const KMITL = createTheme(
    {
      palette: {
        mode: 'light',
        primary: {
          main: '#ED7D31',
          light: '#f6f1ee',
          dark: '#4f4a45',
        },
        secondary: {
          main: '#f6f1ee',
          contrastText: '#4F4A45',
        },
        success: {
          main: '#72d6c9',
        },
        error: {
          main: '#df5450',
        },
        info: {
          main: '#68bde1',
        },
        text: {
          disabled: '#d48b74',
          hint: '#ff6d00',
          secondary: '#464545',
          primary: '#ef6c00',
        },
        divider: '#4F4A45',
        background: {
          default: '#fff3e0',
          paper: '#fafafa',
        },
      },
    }
)