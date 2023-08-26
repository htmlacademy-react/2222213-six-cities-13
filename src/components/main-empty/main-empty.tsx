import React from 'react';
import Header from '../headers/headers';
import { Helmet } from 'react-helmet-async';
import CityList from '../../components/citi-list/citi-list';
import { useAppSelector } from '../hooks';

function MainPagesEmpty(): React.JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList currentCity={currentCity}/>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  We could not find any property available at the moment in {currentCity}
                </p>
              </div>
            </section>
            <div className="cities__right-section" style={
              {
                backgroundImage: 'url(../img/no-places@2x.png)'
              }
            }
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPagesEmpty;

