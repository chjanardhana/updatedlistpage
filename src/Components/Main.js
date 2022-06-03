import React, { useState } from 'react';
import Posneglist from '../PosNegList/Posneglist';
import Exceptionlist from '../ExceptionLists/ExceptionLists';
import DCListComponent from '../DomesticCountries/Domesticcountries';
import Freedomain from '../FreeDomains/Freedomains';
import Riskyairports from '../RiskyAirports/RiskyAirports';
import Riskyproducts from '../RiskyProducts/Riskyproducts';
import Ofaclist from '../Ofaclist/Ofaclist';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import * as routes from '../allRoutes';

const Main = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.posNegList} element={<Posneglist />} />
        <Route path="/fraudnet-ui/list/:lists" element={<Posneglist />} />
        <Route
          path={routes.exception}
          element={<Exceptionlist />}
        />
        <Route path={routes.domains} element={<Freedomain />} />
        <Route
          path={routes.countries}
          element={<DCListComponent />}
        />
        <Route
          path={routes.riskyAirports}
          element={<Riskyairports />}
        />
        <Route
          path={routes.riskyProducts}
          element={<Riskyproducts />}
        />
        <Route path={routes.ofac} element={<Ofaclist />} />
        {/* <Redirect from="*" to="/brand/technology/:java" /> */}
      </Routes>
    </>
  );
};

export default Main;
