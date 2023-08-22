import {useEffect, useState, MutableRefObject, useRef} from 'react';
import { TCity } from '../../types/offer-type';
import { Map, TileLayer } from 'leaflet';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>, cityLocation: Pick<TCity, 'location'>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: cityLocation.location.latitude,
          lng: cityLocation.location.longitude
        },
        zoom: cityLocation.location.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, cityLocation]);

  return map;
}

export default useMap;
