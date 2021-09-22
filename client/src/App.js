import React, { useState } from "react";
import "./App.css";
import NavTop from "./components/Navbar";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import Auth from "./components/Auth";
import DetailView from "./components/DetailView";
import EditBlog from "./components/EditBlog";
import Profile from "./components/Profile";
import LogOut from "./components/LogOut";

const App = () => {
  return (
    <>
      <NavTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create_blog" component={CreateBlog} />
        <Route exact path="/signin" component={Auth} />
        <Route exact path="/full_blog/:id" component={DetailView} />
        <Route exact path="/edit_blog/:id" component={EditBlog} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/logout" component={LogOut} />
      </Switch>
    </>
  );
};

export default App;
