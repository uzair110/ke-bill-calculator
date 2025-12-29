import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6600', // Orange
      dark: '#cc5200', // Darker orange
      light: '#ff944d', // Lighter orange
      contrastText: '#ffffff', // White text on orange
    },
    secondary: {
      main: '#1e90ff', // Blue
      dark: '#1873cc', // Darker blue
      light: '#4da6ff', // Lighter blue
      contrastText: '#ffffff', // White text on blue
    },
    background: {
      default: '#ffffff', // White background
      paper: '#ffffff', // White cards
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#666666', // Gray text
      disabled: '#999999', // Disabled text
    },
  },
  typography: {
    fontFamily: "'Arial', 'Helvetica', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 900,
          textTransform: 'uppercase',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },
  },
});
