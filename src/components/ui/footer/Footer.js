import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Footer.styles";
import Hidden from "@material-ui/core/Hidden";
import footerAdornment from "../../../assets/Footer Adornment.svg";
import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";

export default function Footer(props) {
  const classes = useStyles();

  return (
    <>
      <Hidden mdDown>
        <footer className={classes.footer}>
          <Grid container justify="center" className={classes.mainContainer}>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  onClick={() => props.setValue(0)}
                  to="/"
                  className={classes.link}
                >
                  Home
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(0);
                  }}
                  to="/services"
                  className={classes.link}
                >
                  Services
                </Grid>
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(1);
                  }}
                  to="/gallery"
                  className={classes.link}
                >
                  Gallery
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  onClick={() => props.setValue(2)}
                  to="/offers"
                  className={classes.link}
                >
                  Offers
                </Grid>
                <Grid
                  item
                  component={Link}
                  onClick={() => props.setValue(2)}
                  to="/mission"
                  className={classes.link}
                >
                  Mission
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  onClick={() => props.setValue(3)}
                  to="/contact"
                  className={classes.link}
                >
                  Contact
                </Grid>
                <Grid
                  item
                  component={Link}
                  onClick={() => props.setValue(3)}
                  to="/blog"
                  className={classes.link}
                >
                  Blog
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  onClick={() => props.setValue(4)}
                  to="/facebook/jansonMakelaars"
                  className={classes.link}
                  target="_blank"
                >
                  <img alt="facebook" src={facebook} className={classes.icon} />
                </Grid>
                <Grid
                  item
                  component={Link}
                  onClick={() => props.setValue(4)}
                  to="/instagram/jansonMakelaars"
                  className={classes.link}
                >
                  <img
                    alt="instagram"
                    src={instagram}
                    className={classes.icon}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <img
            alt="adornment"
            src={footerAdornment}
            className={classes.adornment}
          />

          {/* <Grid container>
        <Grid item> 
        <img alt="facebook" src={facebook} />
        </Grid>
        <Grid item> 
        <img alt="instagram" src={instagram} />
        </Grid>
      </Grid> */}
        </footer>
      </Hidden>
    </>
  );
}
