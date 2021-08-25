import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/common/Header";
import Footer from "./Footer";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          {/* <ProductScreen /> */}
          <Route component={ProductScreen} path='/products/:id'></Route>
          <Route component={CartScreen} path='/cart/:id?'></Route>
          <Route component={HomeScreen} path='/' exact></Route>
        </main>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
