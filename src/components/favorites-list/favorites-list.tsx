import React from 'react';
import { City } from '../../const';
import { TOffer } from '../../types/offer-type';
import FavoriteListCity from '../favorites-list-city/favorites-list-city';

type TFavoritesListProps = {
  favorites: TOffer[];
}

function FavoriteList({ favorites }: TFavoritesListProps): React.JSX.Element {

  return (
    <ul className="favorites__list">
      { Object.values(City).map((city) => (
        <FavoriteListCity key={city} city={city} favorites={favorites}/>
      ))}
    </ul>
  );
}

export default FavoriteList;
