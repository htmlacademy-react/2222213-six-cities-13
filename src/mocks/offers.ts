import {TOffer} from '../types/offer-type';

export const offers: TOffer[] = [
  {
    id: crypto.randomUUID(),
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 178,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.7
  },
  {
    id: crypto.randomUUID(),
    title: 'Tile House',
    type: 'hotel',
    price: 458,
    previewImage: 'https://13.design.pages.academy/static/hotel/9.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.4
  },
  {
    id: crypto.randomUUID(),
    title: 'House in countryside',
    type: 'room',
    price: 132,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.361540000000005,
      longitude: 4.883976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.9
  },
  {
    id: crypto.randomUUID(),
    title: 'House in countryside',
    type: 'room',
    price: 187,
    previewImage: 'https://13.design.pages.academy/static/hotel/20.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.570341000000006,
      longitude: 9.975654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4
  }
];
