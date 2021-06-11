import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({ 
root: {
    width:"100%",
   height: "600px",
[theme.breakpoints.down("xs")]: {
    height: "606px"
},
},
title: {
    marginTop: theme.spacing(2),
    // [theme.breakpoints.down("md")]: {
    //    fontSize: "4em",
    
    // },
    [theme.breakpoints.down("xs")]: {
        display: "none"
    
    },
}
}));