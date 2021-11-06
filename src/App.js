import "./App.css";
import { Route, Switch } from "react-router";
import Play from "./components/Play";
import Home from "./components/Home";
import Lost from "./components/Lost";
import Won from "./components/Won";
import Categ from "./components/Categories";
import Howplay from "./components/How-to-play";
import About from "./components/About";
import sound from "./image/audio.mp3";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    let background = document.getElementById("backgroundSound");
    background.volume = 0.2;
  }, []);

  return (
    <div className="App">
      <audio
        id="backgroundSound"
        src={sound}
        autoPlay="autoplay"
        loop="loop"
      ></audio>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/play" component={Play} />
        <Route exact path="/lost" component={Lost} />
        <Route exact path="/won" component={Won} />
        <Route exact path="/categ" component={Categ} />
        <Route exact path="/howplay" component={Howplay} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
