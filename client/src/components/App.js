import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMMON
import Footer from "../components/common/Footer";
import HomeScreen from "../screens/HomeScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import SecondaryFooter from "./common/SecondaryFooter"; //Secondary Footer in Sign and Signup screen so that signin and signup have short listed footer
// import ProductScreen from "../screens/ProductScreenDepricated";

//Product Related Screens
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import ProductListScreen from "../screens/ProductListScreen";
import MainHeader from "./MainHeader";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductDetailSampleScreen from "../screens/ProductDetailSampleScreen";

// USER PROFILE SCREEN
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ProfileScreen from "../screens/ProfileScreen";

// Admin Screens
import AdminHomePage from "../components/AdminDashboard/pages/HomePage.jsx";
import CreateUser from "../components/AdminDashboard/pages/users/CreateUser.jsx";
import ProductList from "../components/AdminDashboard/pages/products/ProductList.jsx";
import UserDetails from "../components/AdminDashboard/pages/users/UserDetails.jsx";
import UserList from "../components/AdminDashboard/pages/users/UserList.jsx";
import Sidebar from "../components/AdminDashboard/Sidebar.jsx";
import Topbar from "../components/AdminDashboard/Topbar.jsx";
import "../components/styles/AdminScreen.css";
import ProductDetails from "./AdminDashboard/pages/products/AdminProductEdit.jsx";
import CreateProduct from "./AdminDashboard/pages/products/CreateProduct";

function App() {
  return (
    <>
      <Router>
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
                component={ProductDetailSampleScreen}
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
          <Switch>
            <SecondaryFooter path='/sign-up' exact>
              <Route component={SignUp} path='/sign-up' exact></Route>
            </SecondaryFooter>
          </Switch>
          <Switch>
            <MainHeader path='/shop' exact>
              <Footer path='/shop' exact>
                <Route component={ProductScreen} path='/shop' exact></Route>
              </Footer>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/shop/:id' exact>
              <Footer path='/shop/:id' exact>
                <Route
                  component={ProductDetailScreen}
                  path='/shop/:id'
                  exact
                ></Route>
              </Footer>
            </MainHeader>
          </Switch>
          {/* <Switch>
            <MainHeader path='/cart' exact>
              <Footer path='/cart' exact>
                <Route component={CartScreen} path='/cart' exact></Route>
              </Footer>
            </MainHeader>
          </Switch> */}
          <Switch>
            <MainHeader path='/profile' exact>
              <Footer path='/profile' exact>
                <Route component={ProfileScreen} path='/profile' exact></Route>
              </Footer>
            </MainHeader>
          </Switch>
          <Switch>
            <MainHeader path='/contact-us' exact>
              <Footer path='/contact-us' exact>
                <Route
                  component={ContactUsScreen}
                  path='/contact-us'
                  exact
                ></Route>
              </Footer>
            </MainHeader>
          </Switch>
          {/* <Route component={DemoScreen} path='/demo' exact></Route> */}
        </main>
        {/* <Route component={AdminScreen} path='/admin' exact></Route> */}
        <Switch>
          <Route path='/admin' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <AdminHomePage />
            </div>
          </Route>
          <Route path='/admin/users' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <UserList />
            </div>
          </Route>
          <Route path='/admin/create-user' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <CreateUser />
            </div>
          </Route>
          <Route path='/admin/product-list' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <ProductList />
            </div>
          </Route>
          <Route path='/admin/product-list/:id' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <ProductDetails />
            </div>
          </Route>
          <Route path='/admin/create-product' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <CreateProduct />
            </div>
          </Route>
          <Route path='/admin/users/:id' exact>
            <Topbar />
            <div className='admin_container'>
              <Sidebar />
              <UserDetails />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
