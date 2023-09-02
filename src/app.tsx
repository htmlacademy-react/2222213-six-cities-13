import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from './const';
import MainPages from './pages/main/main';
import FavoritePage from './pages/favorites/favorites';
import OffersPage from './pages/offers/offers';
import LoginPage from './pages/login/login';
import NotFound from './pages/not-found/not-found';
import PrivateRoute from './components/private-route/private-route';
import { useAppSelector } from './components/hooks';
import Spinner from './components/spinner/spinner';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './store/middleware/redirect';


function App(): React.JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner/>;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPages />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OffersPage authorizationStatus={authorizationStatus}/>}
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
                authorizationStatus={authorizationStatus === AuthorizationStatus.Auth}
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
