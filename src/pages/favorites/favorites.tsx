import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FavoriteList from '../../components/favorites-list/favorites-list';
import Header from '../../components/headers/headers';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { fetchFavorites } from '../../store/api-actions/favorites-api';
import cn from 'classnames';


function FavoritePage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);
  const favoritesOffersIsEmpty = favorites.length === 0;

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities, favorites</title>
      </Helmet>
      <Header/>
      <main className={cn(
        'page__main page__main--favorites',
        { 'page__main--favorites-empty': favoritesOffersIsEmpty }
      )}
      >
        <div className="page__favorites-container container">
          <section className={cn(
            'favorites',
            { 'favorites--empty': favoritesOffersIsEmpty }
          )}
          >
            {favoritesOffersIsEmpty
              ?
              <>
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future
                    trips.
                  </p>
                </div>
              </>
              :
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <FavoriteList favorites={favorites}/>
              </>}
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
