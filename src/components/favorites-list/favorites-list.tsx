import Card from '../card';
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
          {offers.map((item) => <Card key={item.id} offer={item} view={'favoriteList'}/>)}
        </div>
      </li>
    </ul>
  );
}

export default FavoriteList;
