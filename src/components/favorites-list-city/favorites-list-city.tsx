import React from 'react';
import Card from '../card/card';
import { Link } from 'react-router-dom';
import { CityType } from '../favorites-list/favorites-list';


type TFavoritesListProps = {
  city: CityType;
}

function FavoriteListCity(props: TFavoritesListProps): React.JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={''}>
            <span>{props.city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {props.city.favorites.map((offer) => {
          if(offer.isFavorite) {
            return (
              <Card key={offer.id} offer={offer} view={'favoriteList'} />
            );
          }
        })}
      </div>
    </li>
  );
}

export default FavoriteListCity;
