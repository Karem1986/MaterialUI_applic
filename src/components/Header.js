import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import logo from "../../src/assets/logo.svg"
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
//Dropdown 
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
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
  tabs: {
   marginRight: 0,
   marginLeft: 'auto',
  },
  text: {
   ...theme.typography.tab, //centralizes the styles to be used elsewhere in the app
    minWidth: 15,
    marginRight: "20px"
  }
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

const options = ['Amersfoort: 033-436 125 678', 'Leidshe Rein: 033- 123-567- 456', 'Utrecht: 033-456 6789 '];
export default function Header() {
  const classes = useStyles();
 //Dropdown 
 const [open, setOpen] = React.useState(false);
 const anchorRef = React.useRef(null);
 const [selectedIndex, setSelectedIndex] = React.useState(1);

 const handleClick = () => {
   console.info(`You clicked ${options[selectedIndex]}`);
 };

 const handleMenuItemClick = (event, index) => {
   setSelectedIndex(index);
   setOpen(false);
 };

 const handleToggle = () => {
   setOpen((prevOpen) => !prevOpen);
 };

 const handleClose = (event) => {
   if (anchorRef.current && anchorRef.current.contains(event.target)) {
     return;
   }

   setOpen(false);
 };

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
          <img alt="Janson Makelaars" src={logo} className={classes.logo}></img>
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
          <Tabs value={0} className={classes.tabs}>
           <Tab className={classes.text} label="Diensten"></Tab>
           <Tab className={classes.text}label="Aanbod"></Tab>
           <Tab className={classes.text}label="Email-Address"></Tab>
          </Tabs>
          <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick}>Telefoon</Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 3}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </div>
  );
}
