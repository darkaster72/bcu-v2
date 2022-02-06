import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PasswordForget from "./pages/PasswordForget";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route
            path={`${process.env.PUBLIC_URL}/password-forget`}
            component={PasswordForget}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/sign-up`}
            component={SignUp}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
