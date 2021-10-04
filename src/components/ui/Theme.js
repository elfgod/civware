import { createTheme } from '@mui/material/styles';
import { grey } from  '@mui/material/colors';


const civBlack     = "#010101"
const civDark      = "#16161a"
const civDarkGrey  = "#242629"
const civGrey      = "#72757e"
const civLightGrey = "#94a1b2"

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500]
    },
    secondary: {
      main: `${civDarkGrey}`
    }
  },
  typography: {
    h3: {
      fontWeight: 400
    }
  }
});

export default theme;


/* const civDark = grey[900];
const civDarkGrey = grey[800];
const civGrey = grey['A700'];
const civLightGrey = grey[500]; */


/* export default createTheme({
  palette: {    
    primary: {
      main: `${civBlack}`,
    },
    secondary: {
      main: `${civDark}`,
    },
  }
}); */

