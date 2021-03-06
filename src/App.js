import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import Notfound from './Components/Notfound/Notfound';
import ProductDetails from './Components/ProductDetalis/ProductDetails';

function App() {
  return (
    <div>
    <Header> This Is Header</Header>
    <Router>
      <Switch>
        <Route path="/shop">
          <Shop> </Shop>
        </Route>
        <Route path="/review">
          <Review> </Review>
        </Route>
        <Route path="/inventory">
          <Inventory> </Inventory>
        </Route>
        <Route exact path="/">
          <Shop> </Shop>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetails> </ProductDetails>
        </Route>
        <Route path="*">
          <Notfound> </Notfound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
