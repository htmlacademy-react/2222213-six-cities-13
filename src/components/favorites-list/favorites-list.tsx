import Card from '../card/card';
import {TOffers} from '../../types/offer-type';

type TFavoriteListProps = {
  offers: TOffers;
}

function FavoriteList({offers}: TFavoriteListProps) {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {offers.map((offer) => <Card key={offer.id} offer={offer} view={'favoriteList'}/>)}
        </div>
      </li>
    </ul>
  );
}

export default FavoriteList;
