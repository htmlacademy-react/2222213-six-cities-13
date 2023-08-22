import React, { useEffect } from 'react';
import Card from '../card/card';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchFavorites } from '../../store/api-actions/favorites-api';

function FavoriteList(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {favorites.map((offer) => <Card key={offer.id} offer={offer} view={'favoriteList'}/>)}
        </div>
      </li>
    </ul>
  );
}

export default FavoriteList;
