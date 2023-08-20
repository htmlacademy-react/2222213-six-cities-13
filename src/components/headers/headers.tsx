import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions/authorization-api';

function Header(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              { authorizationStatus === AuthorizationStatus.Auth &&
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
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
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signin">Sign in</span>
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
