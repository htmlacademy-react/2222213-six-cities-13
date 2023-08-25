import React from 'react';
import {Helmet} from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FavoriteList from '../../components/favorites-list/favorites-list';
import Header from '../../components/headers/headers';

function FavoritePage(): React.JSX.Element {

  return (
    <div className="page">
      <Helmet>
        <title>6 cities, favorites</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritePage;
