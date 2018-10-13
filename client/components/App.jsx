import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import InternapAPI from './InternapAPI';
import ExternalAPI from './ExternalAPI';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import { logoutUser } from '../actions/logout';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="jumbotron">
            <h1>Hello World</h1>
            <p>
              {this.props.auth.isAuthenticated
                ? 'Logged in as: '
                : 'Please login or register'}
            </p>
            <p>
              {this.props.auth.isAuthenticated && this.props.auth.user.username}
            </p>
            <Link to="/">
              <button className="btn btn-primary m-1">Home</button>
            </Link>
            <Link to="/db">
              <button className="btn btn-primary m-1">Database Query</button>
            </Link>
            <Link to="/ext">
              <button className="btn btn-primary m-1">
                External API Query
              </button>
            </Link>
            {!this.props.auth.isAuthenticated && (
              <React.Fragment>
                <Link to="/register">
                  <button className="btn btn-primary m-1">Register</button>
                </Link>
                <Link to="/login">
                  <button className="btn btn-primary m-1">Login</button>
                </Link>
              </React.Fragment>
            )}
            {this.props.auth.isAuthenticated && (
              <button
                className="btn btn-primary m-1"
                onClick={() => this.props.logoutUser()}
              >
                Logout
              </button>
            )}

            <Route exact path="/db" component={InternapAPI} />
            <Route exact path="/ext" component={ExternalAPI} />

            {!this.props.auth.isAuthenticated && (
              <Route exact path="/register" component={RegisterForm} />
            )}

            {!this.props.auth.isAuthenticated && (
              <Route exact path="/login" component={LoginForm} />
            )}
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
