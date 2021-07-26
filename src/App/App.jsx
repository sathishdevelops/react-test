import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import "./App.scss";

function App() {
  return (
    <div className="Test-App">
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export { App };
