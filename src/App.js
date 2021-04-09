import { BrowserRouter as Router } from "react-router-dom"
import { Switch , Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Diensten from "./Pages/Diensten"
import Aanbod from "./Pages/Aanbod"
import Contact from "./Pages/Contact"

function App() {
  return (
  <Router>
    <Switch>
    <Route path="/diensten"  component={Diensten}></Route>
    <Route path="/aanbod"  component={Aanbod}></Route>
    <Route path="/contact"  component={Contact}></Route>
    <Route path="/" exact component={Homepage}></Route>
    </Switch>
  </Router>
  );
}

export default App;
