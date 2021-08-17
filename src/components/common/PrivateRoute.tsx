import React from "react";
import { Redirect, RouteProps, Route } from "react-router-dom";

export function PrivateRoute(props: RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  console.log("Is logged in", isLoggedIn);
  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
}
