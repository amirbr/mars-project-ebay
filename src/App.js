import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import About from './containers/About'
import ImagesByDate from './containers/ImagesByDate'
import MarsWeather from './containers/MarsWeather'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/ImagesByDate">
            <ImagesByDate />
          </Route>
          <Route path="/MarsWeather">
            <MarsWeather />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
