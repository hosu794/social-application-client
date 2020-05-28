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

function App() {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    dispatch(userActions.getCurrentUser());
    history.listen(function (location, action) {
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <Router>
      <section className="hero is-success is-fullheight">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
