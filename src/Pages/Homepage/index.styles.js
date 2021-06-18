import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({ 
root: {
    width:"100%",
   height: "700px",
[theme.breakpoints.down("xs")]: {
    height: "600px"
},
},
title: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
        display: "none"
    
    },
}
}));