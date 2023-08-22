import React from 'react';
import { TOffer } from '../../types/offer-type';
import OfferList from '../offer-list/offer-list';


type TNearListProps = {
  nearOffers: TOffer[];
}

function NearList({ nearOffers }: TNearListProps): React.JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <OfferList offers={nearOffers.slice(0, 3)} page={'offers'}/>
    </section>
  );
}
export default NearList;
