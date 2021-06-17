import React from "react";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Footer.styles";
import footerAdornment from "../../../assets/Footer Adornment.svg";

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column"spacing={2}>
              <Grid item component={Link} to="/diensten" className={classes.link}>
                Diensten
              </Grid>
              <Grid item component={Link} to="/aanbod" className={classes.link}>
                Aanbod
              </Grid>
              <Grid item component={Link} to="/overons"className={classes.link}>
                Over ons
              </Grid>
              <Grid item component={Link} to="/klanten" className={classes.link}>
                Klanten 
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/huizenfotos" className={classes.link}>
                Huizen's fotos
              </Grid>
              <Grid item component={Link} to="/mission" className={classes.link}>
                Mission
              </Grid>
              <Grid item component={Link} to="/partners" className={classes.link}>
                Partners
              </Grid>
              <Grid item component={Link} to="/process" className={classes.link}>
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/locaties" className={classes.link}>
                Locaties
              </Grid>
              <Grid item component={Link} to="/facebook/jansonMakelaars" className={classes.link}>
                Facebook
              </Grid>
              <Grid item component={Link} to="/instagram/jansonMakelaars" className={classes.link}>
                Instagram
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/contact" className={classes.link}>
                Contact 
              </Grid>
            </Grid>
          </Grid>


        </Grid>
        <img
          alt="adornment"
          src={footerAdornment}
          className={classes.adornment}
        ></img>
      </footer>
    </>
  );
}
