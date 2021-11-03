import "./App.css";
import { Route, Switch } from "react-router";
import Play from "./components/Play";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/play" component={Play} />
      </Switch>
    </div>
  );
}

export default App;
