import { createTheme } from '@mui/material/styles';

const theme = createTheme({

  typography: {
    fontFamily: '"Roboto Condensed", sans-serif',
    h1: {
      fontFamily: '"Roboto Condensed", sans-serif',
    },
    h2: {
      fontFamily: '"Roboto Condensed", sans-serif',
    },
    h3: {
      fontFamily: '"Roboto Condensed", sans-serif',
    },
    h4: {
      fontFamily: '"Roboto Condensed", sans-serif',
    },
    h5: {
      fontFamily: '"Roboto Condensed", sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Roboto Condensed", sans-serif',
      fontStyle: 'italic',
      fontSize: '1.6rem',
      fontWeight: 400,
    },
    body1: {
      fontFamily: '"Raleway", sans-serif',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          letterSpacing: '.1ch',
        }
      }
    }
  },

})


export default theme;