import React from "react" 
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "./index.styles"

export default function Homepage() {
const classes = useStyles()
    return (
        
   
          <Box m={2} className={classes.root}>
            <Typography variant="h5" className={classes.title}>
                Homepage
                </Typography>
                </Box>
            
          )
}