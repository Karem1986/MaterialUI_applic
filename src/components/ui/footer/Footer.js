import React from "react";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Footer.styles";
import footerAdornment from "../../../assets/Footer Adornment.svg";

export default function Footer(props) {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} onClick={() => props.setValue(0)} to="/" className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column"spacing={2}>
              <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(0)}} to="/diensten" className={classes.link}>
                Diensten
              </Grid>
              <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} to="/verkoop" className={classes.link}>
              Verkoop
              </Grid>
              <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} to="/taxatie"className={classes.link}>
                taxatie
              </Grid>
              <Grid item component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(3)}} to="/hypotheeknet" className={classes.link}>
                HypotheekNet
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} onClick={() => props.setValue(2)} to="/huizenfotos" className={classes.link}>
               Aanbod
              </Grid>
              <Grid item component={Link} onClick={() => props.setValue(2)}  to="/mission" className={classes.link}>
                Mission
              </Grid>
              <Grid item component={Link} onClick={() => props.setValue(2)} to="/partners" className={classes.link}>
                Partners
              </Grid>
              <Grid item component={Link} onClick={() => props.setValue(2)} to="/process" className={classes.link}>
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} onClick={() => props.setValue(3)} to="/locaties" className={classes.link}>
                Contact
              </Grid>
              <Grid item component={Link} onClick={() => props.setValue(3)} to="/facebook/jansonMakelaars" className={classes.link}>
                Facebook
              </Grid>
              <Grid item component={Link} onClick={() => props.setValue(3)} to="/instagram/jansonMakelaars" className={classes.link}>
                Instagram
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} onClick={() => props.setValue(4)} to="/contact" className={classes.link}>
                Locaties
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
