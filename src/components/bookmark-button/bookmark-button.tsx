import React, {useState} from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { TOffer } from '../../types/offer-type';
import { favoritesChangeStatus } from '../../store/api-actions/favorites-api';
import { AppRoute, AuthorizationStatus } from '../../const';

type TButtonBookmarkProps = {
  offer: TOffer;
  buttonView: 'card' | 'offers';
};

function ButtonBookmark({offer, buttonView}: TButtonBookmarkProps): React.JSX.Element {
  const {
    id, isFavorite
  } = offer;

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();

  const [isFavorites, setIsFavorites] = useState(isFavorite);

  const handelChangeStatus = () => {
    dispatch(favoritesChangeStatus({ id, status: !isFavorites ? 1 : 0 }));
    setIsFavorites(!isFavorites);
  };

  return (
    <button
      className={cn(
        'button',
        { 'place-card__bookmark-button--active': isFavorites },
        { 'offer__bookmark-button--active': isFavorites },
        {'place-card__bookmark-button': buttonView === 'card'},
        {'offer__bookmark-button': buttonView === 'offers'})}
      type="button" onClick={() => {
        if (authorizationStatus !== AuthorizationStatus.Auth) {
          navigate(AppRoute.Login);
        } else {
          handelChangeStatus();
        }
      }}
    >
      <svg
        className={cn(
          {'place-card__bookmark-icon': buttonView === 'card'},
          {'offer__bookmark-icon': buttonView === 'offers'})}
        width={`${buttonView === 'card' ? 18 : 31}`}
        height={`${buttonView === 'card' ? 19 : 33}`}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default ButtonBookmark;

