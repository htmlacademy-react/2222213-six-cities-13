import React from 'react';
import {TOffer} from '../../types/offer-type';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import cn from 'classnames';

type TOffersCardProps = {
  offer: TOffer;
  view: 'offerList' | 'favoriteList' | 'near';
  onListItemHover?: (id: string) => void;
};

function Card({offer, view, onListItemHover}: TOffersCardProps): React.JSX.Element {
  const {
    id, title, type, price, previewImage, isPremium, rating
  } = offer;

  return (
    <article className={cn(
      'place-card',
      {'cities__card': view === 'offerList'},
      {'favorites__card': view === 'favoriteList'},
      {'near-places__card': view === 'near'})}
    onMouseOver={() => onListItemHover ? onListItemHover(id) : null}
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
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
