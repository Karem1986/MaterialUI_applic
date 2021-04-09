import { createMuiTheme } from '@material-ui/core/styles';

//This MuiTheme overrides the default values of Material UI

export default createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#01579b',
    }
  },
  typography: {
  tab: {
    textTransform: 'none', //overrides de default uppercase on text in navbar
    fontSize: '1rem',
  }
  }
});