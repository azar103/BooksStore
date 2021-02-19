import NavBar from "./components/NavBar";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </>
  );
}

export default App;
