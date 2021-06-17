import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({ 
footer: {
    maxWidth:"100%",
    backgroundColor: "#2097F3",
    zIndex: 1302,
    position: "relative",
    [theme.breakpoints.down("md")]: {
        width: "65em",
    },
    [theme.breakpoints.down("xs")]: {
        width: "37em",
        height: theme.spacing(32)
    },
},
adornment: {
    width:"25em",
    verticalAlign: "bottom",
},
mainContainer: { 
    position: "absolute",
},
link: { 
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold"
},
gridItem: {
    margin: "3em",
}
}));