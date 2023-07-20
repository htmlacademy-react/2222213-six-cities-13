import React from 'react';
import styles from './not-found.module.css';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';


function NotFound(): React.JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities, not found</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
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
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <div className={`${styles.notFound}`}>
          <h1 className={`${styles.notFoundTitle}`}>404</h1>
          <Link className={`${styles.notFoundTitleLink}`} to="/">
            <span className="not-found-description" style={
              {
                fontSize: '20px',
                textTransform: 'uppercase'
              }
            }
            >
              Возвращайся на главную, ошибка при вводе адресной строки!!!
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
