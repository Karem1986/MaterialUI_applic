import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import logo from "../../src/assets/logo.svg";
import logo from "../../../assets/logo.svg"
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
import {useStyles} from './Header.styles'
//Responsiveness Material UI
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
//Dropdown
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
//Link navigation
import { Link } from "react-router-dom";
//Menu
import Menu from "@material-ui/core/Menu";
//Drawer on mobile
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";



function ElevationScroll(props){
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const options = [
  "Amersfoort: 033-436 125 678",
  "Leidshe Rein: 033- 123-567- 456",
  "Utrecht: 033-456 6789 ",
];
export default function Header(props) {
  const { window } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  //Drawer on mobile:
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //Dropdown
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  //Tabs
  const [value, setValue] = React.useState(0);
  //Menu on Services:
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(false); //-->on services/Diensten the menu is by default closed

  //Menu handlers:
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true); //--on hover the menu is visible
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
  const tabs = (
    <React.Fragment>
      <Tabs value={value} onChange={handleChange} className={classes.tabs}>
        <Tab
          className={classes.text}
          component={Link}
          to="/"
          label="Home"
        ></Tab>
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          className={classes.text}
          component={Link}
          onMouseOver={(event) => handleClickMenu(event)}
          to="/diensten"
          label="Diensten"
        ></Tab>
        <Tab
          className={classes.text}
          component={Link}
          to="/aanbod"
          label="Aanbod"
        ></Tab>
        <Tab
          className={classes.text}
          component={Link}
          to="/contact"
          label="Contact"
        ></Tab>
      </Tabs>
      <ButtonGroup
        variant="contained"
        color="primary"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button onClick={handleClick}  className={classes.buttonGroup}>Telefoon</Button>
        <Button
          color="primary"
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
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
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{ onMouseLeave: handleCloseMenu }}
      >
        <MenuItem onClick={handleCloseMenu} component={Link} to="/verkoop">
          Verkoop
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} component={Link} to="/taxatie">
          Taxatie
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} component={Link} to="/hypotheeknet">
          HypotheekNet
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
  //Drawer on mobile handler:
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <IconButton
              onClick={handleDrawerToggle}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>

            <img
              alt="Janson Makelaars"
              src={logo}
              className={classes.logo}
            ></img>
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
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <div className={classes.toolbarMargin}></div>
    </div>
  );
}
