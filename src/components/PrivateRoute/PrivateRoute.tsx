import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = (props: any) => {
  let isAuthenticated = !!localStorage.getItem("token");
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
