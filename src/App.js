import { BrowserRouter as Router } from "react-router-dom"
import { Switch , Route } from "react-router-dom"

import Homepage from "./Pages/Homepage"

function App() {
  return (
  <Router>
    <Switch>
    <Route path="/" exact component={Homepage}></Route>
    </Switch>
  </Router>
  );
}

export default App;
