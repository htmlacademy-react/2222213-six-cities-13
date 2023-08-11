import React, { useRef, useEffect} from 'react';
import { TCity, TOffer, TOffers } from '../../types/offer-type';
import useMap from '../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import leaflet, {layerGroup, Marker} from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import cn from 'classnames';


type TMapProps = {
  allOffersCity: TOffers;
  currentCity: TCity;
  selectedOffers: Pick<TOffer, 'id'> | undefined;
  page: 'main' | 'offers';
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

function Map(props: TMapProps): React.JSX.Element {
  const {allOffersCity, currentCity, selectedOffers, page} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);


  useEffect(() => {
    if(map) {
      const markerLayer = layerGroup().addTo(map);
      allOffersCity.forEach(({...offer}) => {
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
  }, [map, allOffersCity, selectedOffers]);

  return (
    <section className={
      cn(
        'map',
        {'cities__map': page === 'main'},
        {'offer__map': page === 'offers'}
      )
    }
    ref={mapRef}
    >
    </section>
  );
}

export default Map;
