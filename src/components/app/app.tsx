import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import MainPages from '../../pages/main/main';
import FavoritePage from '../../pages/favorites/favorites';
import OffersPage from '../../pages/offers/offers';
import LoginPage from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../hooks';


function App(): React.JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPages />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OffersPage/>}
          >
            <Route path={`${AppRoute.Offer}/:id`}/>
          </Route>
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritePage/>
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<NotFound/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
