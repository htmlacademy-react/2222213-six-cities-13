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
import Spinner from '../../components/spinner/spinner';
import Header from '../../components/headers/headers';
import MainPagesEmpty from '../../components/main-empty/main-empty';


function MainPages(): React.JSX.Element {
  const allOffers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);
  const allOffersCity = allOffers.filter((offer) => offer.city.name === currentCity);
  const isNotOffers = allOffersCity.length === 0;
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

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

  if(isNotOffers || isOffersLoading) {
    return <Spinner/>;
  }

  if(isNotOffers) {
    return <MainPagesEmpty/>;
  } else {
    <MainPages/>;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header/>
      <main className='page__main page__main--index'>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList currentCity={currentCity}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{allOffersCity.length} {allOffersCity.length === 1 ? 'place' : 'places'} to stay in {currentCity}</b>
              <Sorting activeSorting={activeSorting} handleSorting={handleSorting}/>
              <OfferList offers={sortOffers} onListItemHover={handleListItemHover} page={'main'} />
            </section>
            <div className="cities__right-section">
              <Map offers={allOffersCity} currentCity={currentCity} selectedOffers={selectedOffers} page={'main'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPages;

