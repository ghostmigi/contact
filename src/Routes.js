import React from "react";
import { Route, Switch } from "react-router";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Contacts} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/contacts/new" component={AddContact} />
      <Route exact path="/contacts/:id/edit" component={EditContact} />
    </Switch>
  );
};

export default Routes;
