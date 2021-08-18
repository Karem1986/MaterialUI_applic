import React from "react";
import Box from "@material-ui/core/Box";
import { Slide } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./index.styles";

export default function Homepage() {
  const classes = useStyles();
  //NEXT add an animation before fetching properties from the backend: https://blog.logrocket.com/the-top-5-react-animation-libraries-compared/
  return (
    <Box m={2} className={classes.root}>
      <Slide
        in
        direction="up"
        timeout={500}
        style={{ transform: "translateY(12px)" }}
      >
        <Typography variant="h5" className={classes.title}>
          Welcome! Choose from the properties below:
        </Typography>
      </Slide>
    </Box>
  );
}
