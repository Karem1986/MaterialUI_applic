import { createMuiTheme } from '@material-ui/core/styles';

//This MuiTheme overrides the default values of Material UI

export default createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#1de9b6',
    }
  },
  typography: {
      h5: {
          fontWeight: 450
      },
      h1: {
          fontWeight: 400
      },
      h2: {
          fontWeight: 400
      }
  }
});