import React from 'react'
import Box from "@material-ui/core/Box";
import Header from "../../components/ui/header/Header";
import theme from "../../components/ui/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
export default function Diensten() {

    return(
        <>
        <ThemeProvider theme={theme}>
          <Header />
          <Box>
              Aanbod 
              </Box>
        </ThemeProvider>
      </>
    )
}