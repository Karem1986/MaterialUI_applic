import React from 'react'
import Header from "../../components/ui/header/Header";
import theme from "../../components/ui/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
export default function Diensten() {

    return(
        <>
        <ThemeProvider theme={theme}>
          <Header />
          <Box>
              Contact
              </Box>
        </ThemeProvider>
      </>
    )
}