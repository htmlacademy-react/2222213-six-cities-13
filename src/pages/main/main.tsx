import React, {useState} from 'react';
import OfferList from '../../components/offer-list/offer-list';
import {Helmet} from 'react-helmet-async';
import {TOffer} from '../../types/offer-type';
import Map from '../../components/map/map';
import CityList from '../../components/citi-list/citi-list';
import { useAppSelector } from '../../components/hooks';
import Sorting from '../../components/sorting-options/sorting-options';
import { SortDescription, sorting } from '../../const';
import { TSorting } from '../../types/sorting';


function MainPages(): React.JSX.Element {
  const allOffers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);
  const allOffersCity = allOffers.filter((offer) => offer.city.name === currentCity.name);

  const [activeSorting, setActiveSorting] = useState<TSorting>(SortDescription.Popular);

  const [selectedOffers, setSelectedOffers] = useState<Pick<TOffer, 'id'> | undefined>(
    undefined
  );

  function handleSorting(sort: TSorting) {
    setActiveSorting(sort);
  }

  function handleListItemHover(id: string) {
    if (selectedOffers?.id !== id) {
      setSelectedOffers({ id });
    }
  }

  const sortOffers = sorting[activeSorting](allOffersCity).map((offer) => offer);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
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
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList currentCity={currentCity}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{allOffersCity.length} places to stay in {currentCity.name}</b>
              <Sorting activeSorting={activeSorting} handleSorting={handleSorting}/>
              <OfferList allOffersCity={sortOffers} onListItemHover={handleListItemHover} page={'main'} />
            </section>
            <div className="cities__right-section">
              <Map allOffersCity={allOffersCity} currentCity={currentCity} selectedOffers={selectedOffers} page={'main'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPages;
