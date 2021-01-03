import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Cmp, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem("hospital") ? (
        <Cmp {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
export const ProtectedRoute1 = ({ component: Cmp, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem("Organization") ? (
        <Cmp {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
export const ProtectedRoute2 = ({ component: Cmp, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem("Police") ? (
        <Cmp {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
export const ProtectedRoute3 = ({ component: Cmp, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem("User") ? (
        <Cmp {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
