import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({ 
footer: {
    maxWidth:"100%",
    backgroundColor: "#2097F3",
    [theme.breakpoints.down("md")]: {
        width: "65em",
    },
    [theme.breakpoints.down("xs")]: {
        width: "37em",
    },
},
adornment: {
    width:"25em",
    verticalAlign: "bottom",
    // [theme.breakpoints.down("md")]: {
    //     width: "23em"
    // },
    // [theme.breakpoints.down("xs")]: {
    //     width: "17em",
    // },

}
}));