import React from "react";
import { Route, Switch } from "react-router-dom";

import { NotFound, PrivateRoute } from "./components/common";
import Table from "./features/admin/Table";
import LoginPage from "./features/auth/pages/LoginPage";
import HomePage from "./features/homepage/HomePage";
import "./resources/styles.css";
function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute path="/admin">
          <Table />
        </PrivateRoute>

        <Route path="/">
          <HomePage />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
