import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductListing } from "./components/ProductListing";
import { ProductDetails } from "./components/ProductDetail";
import Cart from "./components/Cart";
import Banner from "./components/Banner";
import { Footer } from "./components/Footer";
import SuggestedProducts from "./components/SuggestedProducts";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Banner />
              <ProductListing />
            </Route>
            <Route path="/cart" exact component={Cart} />
            <Route
              path="/products/:productId"
              exact
              component={ProductDetails}
            />

            <Route>404 Not Found!</Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
