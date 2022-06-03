import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as routes from './allRoutes';
import Posneglist from './PosNegList/posnegList';
import Riskyproducts from './RiskyProducts/Riskyproducts';
import Ofaclist from './OfacList/OfacList';
import Freedomain from './FreeDomains/Freedomains';
import Riskyairports from './RiskyAirports/RiskyAirports';
import DCListComponent from './DomesticCountries/Domesticcountries';
import history from './utils/History';

class DashboardMain extends Component {
  render() {
    return (
      <Switch history={history}>
        <Route exact strict path="/brand/sports" component={Posneglist} />
        <Route
          exact
          strict
          path="/brand/exceptions-list"
          component={Posneglist}
        />
        <Route
          exact
          strict
          path="/brand/riskyairports"
          component={Riskyairports}
        />
        <Route
          exact
          strict
          path="/brand/riskyproducts"
          component={Riskyproducts}
        />
        <Route exact strict path="/brand/ofac-list" component={Ofaclist} />
        <Route
          exact
          strict
          path="/brand/domestic-countries"
          component={DCListComponent}
        />
        <Route exact strict path="/brand/free-domains" component={Freedomain} />

        {/* <Route exact strict path={'/login'} component={Login} /> */}
      </Switch>
    );
  }
}
export default DashboardMain;
