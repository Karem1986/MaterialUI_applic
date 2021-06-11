import { fade, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down("sm")]: {
      //shows in ipad and mobiel only
      display: "block",
      marginLeft: 3,
      marginRight: 2,
    },
  },
  logo: {
    display: "block",
    paddingRight: 40,
    marginLeft: 10,
    height: "5em",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: 210,
      height: "2em",
      marginLeft: 1,
      marginRight: 60,
    },
    [theme.breakpoints.down("md")]: {
      margin: 10,
      height: "5em",
    },
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      //search is hided on mobiel
      display: "none",
    },

    [theme.breakpoints.up("md")]: {
      //shows on ipad and laptop
      display: "block",
    },
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    paddingLeft: 10,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 5, 1, 5), //top, right, bottom, left
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(10)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  tabs: {
    marginLeft: theme.spacing(48),
  },
  buttonGroup: {
    marginRight: theme.spacing(1.5)
  },
  text: {
    ...theme.typography.tab, //centralizes the styles to be used elsewhere in the app
    minWidth: 15,
    marginRight: "20px",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  drawer: {
    [theme.breakpoints.down("sm")]: {
      width: 200,
     },
  }
}));