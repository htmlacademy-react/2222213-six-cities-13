import { TOffers } from '../../types/offer-type';
import Card from '../card';


type TOfferListProps = {
  offers: TOffers;
}

function OfferList({offers}: TOfferListProps): React.JSX.Element {
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => <Card key={item.id} offer={item} view={'offerList'}/>)}
    </div>
  );
}

export default OfferList;
