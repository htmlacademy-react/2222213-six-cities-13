import React from 'react';
import { TOffers } from '../../types/offer-type';
import Card from '../card';


type TOfferListProps = {
  offers: TOffers;
  onListItemHover: (id: string) => void;
}

function OfferList({offers, onListItemHover}: TOfferListProps): React.JSX.Element {

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer} view={'offerList'} onListItemHover={onListItemHover}/>)}
    </div>
  );
}

export default OfferList;
