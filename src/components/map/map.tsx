import React, { useRef } from 'react';
import { TCity, TOffers } from '../../types/offer-type';
import useMap from '../hooks/use-map';
import 'leaflet/dist/leaflet.css';


type TMapProps = {
  offers: TOffers;
  city: TCity;
}

function Map(props: TMapProps): React.JSX.Element {
  const {offers, city} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (
    <section className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
