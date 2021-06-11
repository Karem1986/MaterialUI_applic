import React from "react";
import {useStyles} from "./Footer.styles"

export default function Footer() {
    const classes = useStyles()
    
    return (
        <>
    <footer className={classes.footer}>Footer</footer>
        </>
    )
}