import React, { useRef, useEffect} from 'react';
import { TCity, TOffer} from '../../types/offer-type';
import useMap from '../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import leaflet, {layerGroup, Marker} from 'leaflet';
import { City, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import cn from 'classnames';
import { useAppSelector } from '../hooks';


type TMapProps = {
  offers: TOffer[];
  currentCity: City;
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

function getLocationCity(city: City): Pick<TCity, 'location'> {
  switch (city) {
    case City.Paris:
      return {
        location: {
          latitude: 48.8534,
          longitude: 2.3488,
          zoom: 12
        }
      };
    case City.Cologne:
      return {
        location: {
          latitude: 50.8936,
          longitude: 7.0731,
          zoom: 12
        }
      };
    case City.Brussels:
      return {
        location: {
          latitude: 50.846707,
          longitude: 4.352472,
          zoom: 12
        }
      };
    case City.Amsterdam:
      return {
        location: {
          latitude: 52.374,
          longitude: 4.88969,
          zoom: 12
        }
      };
    case City.Hamburg:
      return {
        location: {
          latitude: 53.5753,
          longitude: 10.0153,
          zoom: 12
        }
      };
    case City.Dusseldorf:
      return {
        location: {
          latitude: 51.2217,
          longitude: 6.77616,
          zoom: 12
        }
      };
  }
}

function Map(props: TMapProps): React.JSX.Element {
  const {offers, currentCity, page} = props;
  const cityLocation = getLocationCity(currentCity);
  const selectedOffer = useAppSelector((state) => state.offer.selectedOffer);

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);


  useEffect(() => {
    if(map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach(({ location, ...offer }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker.setIcon(
          offer.id === selectedOffer
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(markerLayer);
      });

      map.setView({ lat: cityLocation.location.latitude, lng: cityLocation.location.longitude },
        cityLocation.location.zoom);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer, cityLocation]);

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
