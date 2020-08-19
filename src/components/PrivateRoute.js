import React from "react";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({component: Component}, ...rest) => {
  return (
    <Route
      {...rest}
      render={() =>
        // Will add Token name once provided by backend
        localStorage.getItem("") ? <Component /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
