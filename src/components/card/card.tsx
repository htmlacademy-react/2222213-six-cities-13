import React, {useEffect, useState} from 'react';
import {TOffer} from '../../types/offer-type';
import {Link} from 'react-router-dom';
import {AppRoute, OfferType, capitalize, transformRatingToPercent} from '../../const';
import cn from 'classnames';
import ButtonBookmark from '../bookmark-button/bookmark-button';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addSelectedOffer } from '../../store/slices/offer-slices';
import { addFavorite, deleteFavorite } from '../../store/api-actions/favorites-api';


type TOffersCardProps = {
  offer: TOffer;
  view: 'offerList' | 'favoriteList' | 'near';
};

function Card({offer, view}: TOffersCardProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const {
    id, title, type, price, previewImage, isPremium, rating
  } = offer;

  const favoritesOffers = useAppSelector((state) => state.favoritesOffers.favoritesOffers);
  const isFavorite = !!favoritesOffers.find((item) => item.id === id);

  const [isFavoriteOffer, setIsFavoriteOffer] = useState(isFavorite);

  useEffect(() => {
    if(isFavorite) {
      setIsFavoriteOffer(true);
    } else {
      setIsFavoriteOffer(false);
    }
  }, [isFavorite]);

  const handleChangeStatus = () => {
    if (!isFavoriteOffer) {
      dispatch(addFavorite({ id }));
    } else {
      dispatch(deleteFavorite({ id }));
    }
    setIsFavoriteOffer(isFavorite);
  };

  const handleCardMouseOver = () => {
    if (view === 'offerList') {
      dispatch(addSelectedOffer(id));
    }
  };

  const handleCardMouseLeave = () => {
    if (view === 'offerList') {
      dispatch(addSelectedOffer(null));
    }
  };

  return (
    <article className={cn(
      'place-card',
      {'cities__card': view === 'offerList'},
      {'favorites__card': view === 'favoriteList'},
      {'near-places__card': view === 'near'})}
    onMouseOver={handleCardMouseOver}
    onMouseLeave={handleCardMouseLeave}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={cn(
        'place-card__image-wrapper',
        {'cities__image-wrapper': view === 'offerList'},
        {'favorites__image-wrapper': view === 'favoriteList'},
        {'near-places__image-wrapper': view === 'near'})}
      >
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={`${view === 'favoriteList' ? 150 : 260}`}
            height={`${view === 'favoriteList' ? 110 : 200}`}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={cn(
        'place-card__info',
        { 'favorites__card-info': view === 'favoriteList' }
      )}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <ButtonBookmark isFavorite={isFavorite} buttonView={'card'} handleChangeStatus={handleChangeStatus}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${transformRatingToPercent(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type === OfferType.Room ? 'Private Room' : capitalize(type)}</p>
      </div>
    </article>
  );
}

export default Card;
