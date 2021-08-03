import logo from "./logo.svg";
import "./App.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./compoonent/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
