import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import ProductListScreen from "../screens/ProductListScreen";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

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
          <Route component={ProductListScreen} path='/edit' exact></Route>
          <Route component={SignIn} path='/sign-in' exact></Route>
          <Route component={SignUp} path='/sign-up' exact></Route>
        </main>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
