import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductListing } from "./components/ProductListing";
import { ProductDetails } from "./components/ProductDetail";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/cart" exact component={Cart} />
            <Route
              path="/products/:productId"
              exact
              component={ProductDetails}
            />
            <Route>404 Not Found!</Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
