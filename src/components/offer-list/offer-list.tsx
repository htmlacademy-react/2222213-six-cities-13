import {useState} from 'react';
import { TOffers } from '../../types/offer-type';
import Card from '../card';


type TOfferListProps = {
  offers: TOffers;
}

function OfferList({offers}: TOfferListProps): React.JSX.Element {
  const [activated, setActivated] = useState<{id: string | null}>({ id: null });

  function handleAddActive(id: string) {
    if (activated.id !== id) {
      setActivated({ id });
    }
  }

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => <Card key={item.id} offer={item} view={'offerList'} onAddActive={() => handleAddActive(item.id)}/>)}
    </div>
  );
}

export default OfferList;
