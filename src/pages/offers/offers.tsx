import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import ReviewsForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review/review-list';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector} from '../../components/hooks';
import {isNotOffer} from '../../store/action';
import Header from '../../components/headers/headers';
import { fetchNearOffer, fetchOffer } from '../../store/api-actions/offers-api';
import NotFound from '../not-found/not-found';
import { AuthorizationStatus, capitalize, transformRatingToPercent } from '../../const';
import NearList from '../../components/near-list/near-list';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import ButtonBookmark from '../../components/bookmark-button/bookmark-button';
import cn from 'classnames';


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
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  useEffect(() => {
    if(id) {
      dispatch(fetchOffer(id));
      dispatch(fetchNearOffer(id));
    }

    return () => {
      dispatch(isNotOffer());
    };
  },[dispatch, id]);

  if (isOffersLoading) {
    return <LoadingScreen/>;
  } else if (!offer) {
    return <NotFound/>;
  }

  const {
    images, isPremium, title, type,
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
                <ButtonBookmark offer={offer} buttonView={'offers'}/>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${transformRatingToPercent(rating)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{capitalize(type)}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} {maxAdults === 1 ? 'adult' : 'adults'}
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
                  <div className={cn(
                    'offer__avatar-wrapper user__avatar-wrapper',
                    {'offer__avatar-wrapper--pro': isPro}
                  )}
                  >
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
          <Map offers={[...nearOffers.slice(0, 3), offer]} selectedOffers={offer} page={'offers'} currentCity={currentCity}/>
        </section>
        <div className="container">
          <NearList nearOffers={nearOffers}/>
        </div>
      </main>
    </div>
  );
}

export default OffersPage;
