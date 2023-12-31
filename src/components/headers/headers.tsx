import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions/authorization-api';


function Header(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const user = useAppSelector((state) => state.user.user);
  const favorites = useAppSelector((state) => state.favoritesOffers.favoritesOffers);

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              { authorizationStatus === AuthorizationStatus.Auth && user &&
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      {user.email}
                    </span>
                    <span className="header__favorite-count">{favorites.length}</span>
                  </Link>
                </li>}
              <li className="header__nav-item">
                {authorizationStatus === AuthorizationStatus.Auth
                  ?
                  <span className="header__signout" onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                  }}
                  >Sign out
                  </span>
                  :
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <span className="header__login">Sign in</span>
                  </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
