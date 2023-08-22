import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import ReviewsForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review/review-list';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import {isNotOffer} from '../../store/action';
import Header from '../../components/headers/headers';
import { fetchNearOffer, fetchOffer } from '../../store/api-actions/offers-api';
import NotFound from '../not-found/not-found';
import { AuthorizationStatus } from '../../const';
import NearList from '../../components/near-list/near-list';

type TOfferProps = {
  authorizationStatus: AuthorizationStatus;
}


function OffersPage({authorizationStatus}: TOfferProps): React.JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.currentCity);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const reviews = useAppSelector((state) => state.reviews);
  const offer = useAppSelector((state) => state.offer);


  useEffect(() => {
    if(id) {
      dispatch(fetchOffer(id));
      dispatch(fetchNearOffer(id));
    }

    return () => {
      dispatch(isNotOffer);
    };
  },[dispatch, id]);

  if (!offer) {
    return <NotFound/>;
  }

  const {
    images, isPremium, title,
    rating, bedrooms, maxAdults,
    price, goods, description,
    host: { avatarUrl, isPro, name }
  } = offer;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities, offers</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.slice(0, 6).map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${rating * 20}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">Apartment</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item) => (
                    <li key={item} className="offer__inside-item">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{name}</span>
                  {isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewList id={id}/>
                {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm id={id}/>}
              </section>
            </div>
          </div>
          <Map offers={[...nearOffers.slice(0,3), offer]} selectedOffers={offer} page={'offers'} currentCity={currentCity}/>
        </section>
        <div className="container">
          <NearList nearOffers={nearOffers}/>
        </div>
      </main>
    </div>
  );
}

export default OffersPage;
