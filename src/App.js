import React, { useEffect } from "react";
import axios from "axios";
import "bulma";

import PropTypes from "prop-types";

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
import Account from "./_components/user/Account";
import ChangeCredentials from "./_components/user/ChangeCredentials";
import { user } from "./_reducers/user.reducer";
import EditDashboard from "./_components/stories/EditDashboard";
import EditStory from "./_components/stories/EditStory";
import EditCommentDashboard from "./_components/comments/EditCommentDashboard";

function App() {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const user = useSelector((state) => state.user.user);

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
        <div
          className="container"
          style={{
            width: "100%",
          }}
        >
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/stories" component={Pagination} exact />
            <Route path="/stories/:id" component={Story} exact />
            <PrivateRoute
              path="/stories/edit/:id"
              component={EditStory}
              exact
            />
            <PrivateRoute
              path="/comment/edit/:id"
              exact
              component={EditCommentDashboard}
            />
            <PrivateRoute
              path="/account/stories"
              component={() => <Pagination user={user} />}
            />
            <PrivateRoute
              path="/stories/edit/:id"
              component={EditStory}
              exact
            />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/account" exact component={Account} />
            <PrivateRoute
              path="/account/changecredentials"
              component={ChangeCredentials}
            />
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

App.propTypes = {
  alert: PropTypes.object,
  loggenIn: PropTypes.bool.isRequired,
  alertActions: PropTypes.object,
};
