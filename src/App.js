import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Cart from "./components/Cart/Cart/Cart";

function App() {
 return (
  <Router>
   <Switch>
    <Route exact path="/">
     <Home />
    </Route>
    <Route exact path="/cart">
     <Cart />
    </Route>
   </Switch>
  </Router>
 );
}

export default App;
