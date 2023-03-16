import React, { memo } from 'react';

import {
  Route,
  Routes as RRDRoutes,
  BrowserRouter as Router
} from 'react-router-dom';
import {MAIN_ROUTES} from "./constants";
import {Home} from "./pages";

const Routes = () => {
  return (
      <Router>
        <RRDRoutes>
          <Route
              path={MAIN_ROUTES.HOME}
              element={<Home />}
          />
        </RRDRoutes>
      </Router>
  );
};

export default memo(Routes);