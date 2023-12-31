import React from 'react';
import { TOffers } from '../../types/offer-type';
import Card from '../card/card';
import cn from 'classnames';


type TOfferListProps = {
  offers: TOffers;
  page: 'offers' | 'main';
}

function OfferList({offers, page}: TOfferListProps): React.JSX.Element {

  return(
    <div className={cn(
      'places__list',
      {'cities__places-list tabs__content': page === 'main'},
      {'near-places__list': page === 'offers'}
    )}
    >
      {offers.map((offer) => <Card key={offer.id} offer={offer} view={page === 'main' ? 'offerList' : 'near'}/>)}
    </div>
  );
}

export default OfferList;
