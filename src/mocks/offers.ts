import {TOffers, TCity} from '../types/offer-type';

export const offers: TOffers = [
  {
    id: crypto.randomUUID(),
    title: 'The Joshua Tree House',
    type: 'house',
    price: 720,
    previewImage: 'https://13.design.pages.academy/static/hotel/3.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude:  52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.4
  },
  {
    id: crypto.randomUUID(),
    title: 'Wood and stone place',
    type: 'hotel',
    price: 422,
    previewImage: 'https://13.design.pages.academy/static/hotel/19.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.8
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
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.9
  },
  {
    id: crypto.randomUUID(),
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 223,
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
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.9
  }
];

export const city: TCity = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  }
};

export const offersNear: TOffers = [
  {
    id: crypto.randomUUID(),
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 222,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude:  52.36514938496378,
      longitude: 4.773877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'https://url-to-image/image.png'
  },
  {
    id: crypto.randomUUID(),
    title: 'House in countryside',
    type: 'room',
    price: 144,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude:  52.38514938496378,
      longitude: 4.663877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 2,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude:  52.34514938496378,
      longitude: 4.653877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 3,
    previewImage: 'https://13.design.pages.academy/static/hotel/8.jpg'
  },
];
