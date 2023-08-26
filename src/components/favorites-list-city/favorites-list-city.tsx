import React from 'react';
import Card from '../card/card';
import { City } from '../../const';
import { Link } from 'react-router-dom';
import { TOffer } from '../../types/offer-type';

type TFavoritesListProps = {
  city: City;
  favorites: TOffer[];
}

function FavoriteListCity({ favorites, city }: TFavoritesListProps): React.JSX.Element {

  return (
    <li key={city} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={''}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.filter((offer) => offer.city.name === city).map((offer) => (
          <Card key={offer.id} offer={offer} view={'favoriteList'}/>))}
      </div>
    </li>
  );
}

export default FavoriteListCity;
