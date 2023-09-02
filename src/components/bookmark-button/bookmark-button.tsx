import React, {useState} from 'react';
import cn from 'classnames';
import {useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type TButtonBookmarkProps = {
  isFavorite: boolean;
  buttonView: 'card' | 'offers';
  handleChangeStatus: () => void;
};

function ButtonBookmark(props: TButtonBookmarkProps): React.JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const navigate = useNavigate();

  const [isFavoriteOffer, setIsFavoriteOffer] = useState(props.isFavorite);

  const handleChangeStatusClick = () => {
    props.handleChangeStatus();
    setIsFavoriteOffer((prevState) => !prevState);
  };

  return (
    <button
      className={cn(
        'button',
        {'place-card__bookmark-button': props.buttonView === 'card'},
        { 'place-card__bookmark-button--active': props.buttonView === 'card' && isFavoriteOffer &&
        authorizationStatus === AuthorizationStatus.Auth},
        {'offer__bookmark-button': props.buttonView === 'offers'},
        { 'offer__bookmark-button--active': props.buttonView === 'offers' && isFavoriteOffer &&
        authorizationStatus === AuthorizationStatus.Auth})}
      type="button" onClick={() => {
        if (authorizationStatus !== AuthorizationStatus.Auth) {
          navigate(AppRoute.Login);
        } else {
          handleChangeStatusClick();
        }
      }}
    >
      <svg
        className={cn(
          {'place-card__bookmark-icon': props.buttonView === 'card'},
          {'offer__bookmark-icon': props.buttonView === 'offers'})}
        width={`${props.buttonView === 'card' ? 18 : 31}`}
        height={`${props.buttonView === 'card' ? 19 : 33}`}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default ButtonBookmark;

