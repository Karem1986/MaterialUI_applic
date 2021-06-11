import React from "react";
import { useStyles } from "./Footer.styles";
import footerAdornment from "../../../assets/Footer Adornment.svg";

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <img
          alt="adornment"
          src={footerAdornment}
          className={classes.adornment}
        ></img>
      </footer>
    </>
  );
}
