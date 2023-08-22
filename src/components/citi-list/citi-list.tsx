import React from 'react';
import { useAppDispatch } from '../hooks';
import { setCurrentCity } from '../../store/action';
import { AppRoute, City } from '../../const';
import { Link } from 'react-router-dom';

type TCityListProps = {
  currentCity: City;
}

function CityList({currentCity}: TCityListProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  const changeCityHandler = (city: City) => {
    dispatch(setCurrentCity(city));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(City).map((city) => (
          <li key={city} className="locations__item">
            <Link className={`locations__item-link ${currentCity === city ? 'tabs__item--active' : 'tabs__item'}`}
              to={AppRoute.Main}
              onClick={()=>changeCityHandler(city)}
            >
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;

