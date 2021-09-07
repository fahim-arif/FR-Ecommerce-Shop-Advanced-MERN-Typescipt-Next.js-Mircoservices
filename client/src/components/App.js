import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "../components/common/Footer";
import HomeScreen from "../screens/HomeScreen";
// import ProductScreen from "../screens/ProductScreenDepricated";

import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import ProductListScreen from "../screens/ProductListScreen";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import MainHeader from "./MainHeader";
import SecondaryFooter from "./common/SecondaryFooter";

import AdminScreen from "../screens/AdminScreen";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <main>
          <Switch>
            <MainHeader exact path='/'>
              <Footer exact path='/'>
                <Route component={HomeScreen} path='/' exact></Route>
              </Footer>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader exact path='/product'>
              <Route
                component={ProductDetailScreen}
                path='/product'
                exact
              ></Route>
            </MainHeader>
          </Switch>
          <Route component={CartScreen} path='/cart/:id?'></Route>
          <Route component={ProductListScreen} path='/edit' exact></Route>
          <Switch>
            <SecondaryFooter path='/sign-in' exact>
              <Route component={SignIn} path='/sign-in' exact></Route>
            </SecondaryFooter>
          </Switch>
          <Route component={SignUp} path='/sign-up' exact></Route>
          <Switch>
            <MainHeader path='/shop' exact>
              <Footer path='/shop' exact>
                <Route component={ProductScreen} path='/shop' exact></Route>
              </Footer>
            </MainHeader>
          </Switch>
          {/* <Route component={DemoScreen} path='/demo' exact></Route> */}
        </main>
        <Route component={AdminScreen} path='/admin' exact></Route>
      </Router>
    </>
  );
}

export default App;
