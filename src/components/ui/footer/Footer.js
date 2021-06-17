import React from "react";
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
              <Grid item className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column"spacing={2}>
              <Grid item className={classes.link}>
                Ons verhaal 
              </Grid>
              <Grid item className={classes.link}>
                Huisen Fotos
              </Grid>
              <Grid item className={classes.link}>
                Over ons
              </Grid>
              <Grid item className={classes.link}>
                Klanten 
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                The revolution
              </Grid>
              <Grid item className={classes.link}>
                Mission
              </Grid>
              <Grid item className={classes.link}>
                Partners
              </Grid>
              <Grid item className={classes.link}>
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                Locaties
              </Grid>
              <Grid item className={classes.link}>
                Facebook
              </Grid>
              <Grid item className={classes.link}>
                Instagram
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                Contact ons
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
