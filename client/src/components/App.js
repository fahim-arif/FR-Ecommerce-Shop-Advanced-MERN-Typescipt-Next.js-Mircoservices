import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "../components/common/Footer";
import HomeScreen from "../screens/HomeScreen";
// import ProductScreen from "../screens/ProductScreenDepricated";
import DemoScreen from "../screens/DemoScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import ProductListScreen from "../screens/ProductListScreen";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import MainHeader from "./MainHeader";
function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <main>
          <Switch>
            <MainHeader>
              <Route component={HomeScreen} path='/' exact></Route>
            </MainHeader>
          </Switch>
          <Switch>
            <Route
              component={ProductDetailScreen}
              path='/product'
              exact
            ></Route>
          </Switch>
          {/* <Route component={ProductScreen} path='/products/:id'></Route> */}
          <Route component={CartScreen} path='/cart/:id?'></Route>
          <Route component={ProductListScreen} path='/edit' exact></Route>
          <Route component={SignIn} path='/sign-in' exact></Route>
          <Route component={SignUp} path='/sign-up' exact></Route>
          <Route component={ProductScreen} path='/product-list' exact></Route>
          {/* <Route component={DemoScreen} path='/demo' exact></Route> */}
        </main>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
