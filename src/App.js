import React, { useEffect } from "react";
import axios from "axios";
import "bulma";
import { alertActions, userActions } from "./_actions";
import { useDispatch, useSelector } from "react-redux";
import { history } from "./_helpers";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { PrivateRoute } from "./_components/PrivateRoute";

import Register from "./_components/auth/Register";
import Home from "./_components/layout/Home";
import Footer from "./_components/layout/Footer";
import Login from "./_components/auth/Login";
import Navbar from "./_components/layout/Navbar";
import Pagination from "./_components/stories/Pagination";
import Story from "./_components/stories/Story";
import Dashboard from "./_components/stories/Dashboard";
import About from "./_components/layout/About";

function App() {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const loggedIn = useSelector((state) => state.authentication.loggedIn);

  useEffect(() => {
    dispatch(userActions.getCurrentUser());
    history.listen(function (location, action) {
      dispatch(alertActions.clear());
    });
  }, [loggedIn]);

  return (
    <Router>
      <section className="hero is-success is-fullheight">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/stories" component={Pagination} exact />
            <Route path="/stories/:id" component={Story} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
