import React from "react" 
import { ThemeProvider } from "@material-ui/core/styles"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import theme from "../../components/ui/Theme"
import { useStyles } from "./index.styles"
//End MUI
import Header from "../../components/ui/header/Header"

export default function Homepage() {
const classes = useStyles()
    return (
        
        <ThemeProvider theme={theme}>
            <Header />
          <Box m={2} className={classes.root}>
            <Typography variant="h5" className={classes.title}>
                Homepage
                </Typography>
                </Box>
            </ThemeProvider>
            
          )
}