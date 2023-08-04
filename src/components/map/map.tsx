import React, { useRef, useEffect} from 'react';
import { TCity, TOffer, TOffers } from '../../types/offer-type';
import useMap from '../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import leaflet, {layerGroup, Marker} from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';


type TMapProps = {
  offers: TOffers;
  city: TCity;
  selectedOffers: Pick<TOffer, 'id'> | undefined;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: TMapProps): React.JSX.Element {
  const {offers, city, selectedOffers} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    if(map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach(({...offer}) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(
          selectedOffers !== undefined && offer.id === selectedOffers.id
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffers]);

  return (
    <section className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
