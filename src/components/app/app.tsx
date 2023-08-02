import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPages from '../../pages/main/main';
import FavoritePage from '../../pages/favorites/favorites';
import OffersPage from '../../pages/offers/offers';
import LoginPage from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {TOffers, TCity} from '../../types/offer-type';


type AppOffersProps = {
  offers: TOffers;
  city: TCity;
}

function App({offers, city}: AppOffersProps): React.JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPages offers={offers} city={city}/>}
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
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritePage offers={offers}/>
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
