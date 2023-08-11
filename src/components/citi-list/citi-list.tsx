import React from 'react';
import { TCity } from '../../types/offer-type';
import { useAppDispatch } from '../hooks';
import { setCurrentCity } from '../../store/action';
import { AppRoute, CITIES } from '../../const';
import { Link } from 'react-router-dom';

type TCityListProps = {
  currentCity: TCity;
}

function CityList({currentCity}: TCityListProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  const changeCityHandler = (city: TCity) => {
    dispatch(setCurrentCity(city));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li key={city.name} className="locations__item">
            <Link className={`locations__item-link ${currentCity.name === city.name ? 'tabs__item--active' : 'tabs__item'}`}
              to={AppRoute.Main}
              onClick={()=>changeCityHandler(city)}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;

