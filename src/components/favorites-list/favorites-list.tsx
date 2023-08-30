import React from 'react';
import { TOffer } from '../../types/offer-type';
import FavoriteListCity from '../favorites-list-city/favorites-list-city';

type TFavoritesListProps = {
  favorites: TOffer[];
}

export type CityType = {
  name: string;
  favorites: TOffer[];
}

function FavoriteList({ favorites }: TFavoritesListProps): React.JSX.Element {
  const getCities = () => {
    const cities: CityType[] = [];
    favorites.forEach((offer) => {
      const city = offer.city.name;
      const isCityExist = cities.find((item) => item.name === city);

      if(!isCityExist) {
        const newCity: CityType = {
          name: city,
          favorites: [offer]
        };
        cities.push(newCity);
      } else {
        isCityExist.favorites.push(offer);
      }
    });
    return cities;
  };
  const cities = getCities();

  return (
    <ul className="favorites__list">
      {cities.map((city) =>
        <FavoriteListCity key={city.name} city={city}/>
      )}
    </ul>
  );
}

export default FavoriteList;
