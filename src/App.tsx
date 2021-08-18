import React from "react";
import { Route, Switch } from "react-router-dom";

import { NotFound, PrivateRoute } from "./components/common";
import Table from "./features/admin/Table";
import LoginPage from "./features/auth/pages/LoginPage";
import HomePage from "./features/homepage/HomePage";
import Header from "./features/header_footer/Header";
import "./resources/styles.css";
import ItemDetail from "./features/admin/ItemDetail";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute path="/admin">
          <Table />
        </PrivateRoute>

        <Route path="/:id" component={ItemDetail} exact></Route>

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
