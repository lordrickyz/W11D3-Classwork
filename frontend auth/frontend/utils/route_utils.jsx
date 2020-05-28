import React from 'react';
import { connect } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';
// import { mapDispatchToProps } from '../components/session/login_container'

const mapStateToProps = state => ({ 
  loggedIn: Boolean(state.session.currentUser)
});

// <AuthRoute path="" component={} />

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/"/> : <Component {...props}/>
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    )}
  />
);

// const Bool = ({ loggedIn, path, component: Component }) => (
//   <Route
//     path={path}
//     render={props => (
//       loggedIn ? <Component {...props} /> : <Redirect to="/login" />
//     )}
//   />
// );


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
// export const BoolRoute = withRouter(connect(mapDispatchToProps)(Bool));