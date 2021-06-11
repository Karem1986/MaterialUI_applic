import React from "react" 
//Material UI:
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../../components/ui/Theme"
//End MUI
import Header from "../../components/ui/header/Header"
export default function Homepage() {

    return (
        <ThemeProvider theme={theme}>
            <Header />
            
            </ThemeProvider>
            
          )
}