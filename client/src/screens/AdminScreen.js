import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../components/AdminDashboard/pages/HomePage.jsx";
import CreateUser from "../components/AdminDashboard/pages/users/CreateUser.jsx";
import ServiceList from "../components/AdminDashboard/pages/services/ServiceList.jsx";
import UserDetails from "../components/AdminDashboard/pages/users/UserDetails.jsx";
import UserList from "../components/AdminDashboard/pages/users/UserList.jsx";
import Sidebar from "../components/AdminDashboard/Sidebar.jsx";
import Topbar from "../components/AdminDashboard/Topbar.jsx";
import "../components/styles/AdminScreen.css";
import ServiceDetails from "../components/AdminDashboard/pages/services/ServiceDetails.jsx";
const AdminScreen = () => {
  return (
    <Router>
      <Switch>
        <Route path='/admin' exact>
          <Topbar />
          <div className='admin_container'>
            <Sidebar />
            <HomePage />
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
        <Route path='/admin/service-list' exact>
          <Topbar />
          <div className='admin_container'>
            <Sidebar />
            <ServiceList />
          </div>
        </Route>
        <Route path='/admin/service-list/:id' exact>
          <Topbar />
          <div className='admin_container'>
            <Sidebar />
            <ServiceDetails />
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
  );
};

export default AdminScreen;
