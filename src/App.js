import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Cart from "./components/Cart/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Wishlist from "./components/Wishlist/Wishlist";
import Comparison from "./components/Comparison/Comparison";
import Shop from "./components/Shop/Shop/Shop";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
 useEffect(() => {
  Aos.init({ duration: 2000 });
 }, []);

 return (
  <Router>
   <Switch>
    <Route exact path="/">
     <Home />
    </Route>
    <Route exact path="/cart">
     <Cart />
    </Route>
    <Route exact path="/checkout">
     <Checkout />
    </Route>
    <Route exact path="/wishlist">
     <Wishlist />
    </Route>
    <Route exact path="/comparison">
     <Comparison />
    </Route>
    <Route exact path="/shop">
     <Shop />
    </Route>
   </Switch>
  </Router>
 );
}

export default App;
