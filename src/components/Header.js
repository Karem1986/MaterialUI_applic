import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import logo from "../../src/assets/logo.svg"
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbarMargin : {
    ...theme.mixins.toolbar
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down('sm')]: {//shows in ipad and mobiel only
      display: 'block',
    },  
  },
  logo: {
    display: 'block',
    paddingRight: 40,
    marginLeft: 0,
    height:"3em",
    [theme.breakpoints.down('sm')]: {
      display: 'block', 
      width: 200,
      height: 70,
    }, 
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },  
    
  },
  search: {
    position: 'relative',
    [theme.breakpoints.down('xs')]: { //hided in mobiel
      display: 'none', 
    }, 
 
    [theme.breakpoints.up('md')]: {//shows on ipad and laptop
      display: 'block', 
      
    }, 
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    paddingLeft: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar disableGutters>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <img alt="Janson makelaars logo" src={logo} className={classes.logo}></img>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </div>
  );
}
