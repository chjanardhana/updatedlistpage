import React, { Component } from 'react';
import Login from '../Login/Login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import DashboardMain from '../dashboardMain';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/login"
          exact
          component={Login}
          render={(props) =>
            this.props.isLoggedIn ? (
              this.props.redirectAfterLogin()
            ) : (
              <Login {...props} />
            )
          }
        />

        <Route exact strict path="/brand/*" render={() => <DashboardMain />} />

        <Redirect from="*" to="/login" />
      </Switch>
    );
  }
}

export default Routes;
