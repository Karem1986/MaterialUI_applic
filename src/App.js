import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import Header from "./components/ui/header/Header";
import Homepage from "./Pages/Homepage";
import Diensten from "./Pages/Diensten";
import Aanbod from "./Pages/Aanbod";
import Contact from "./Pages/Contact";
import Footer from "./components/ui/footer/Footer";

function App() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [value, setValue] = React.useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route path="/diensten" component={Diensten}></Route>
          <Route path="/aanbod" component={Aanbod}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/" exact component={Homepage}></Route>
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
