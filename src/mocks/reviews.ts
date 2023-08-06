import {TReviews} from '../types/review-type';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const reviews: TReviews = [
  {
    id: crypto.randomUUID(),
    date: new Date().toDateString(),
    user: {
      name: 'Oliver Conner',
      avatarUrl: AVATAR_URL,
      isPro: false
    },
    comment: 'comment1. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: crypto.randomUUID(),
    date: new Date().toDateString(),
    user: {
      name: 'Max',
      avatarUrl: AVATAR_URL,
      isPro: true
    },
    comment: 'comment2. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 3
  },
  {
    id: crypto.randomUUID(),
    date: new Date().toDateString(),
    user: {
      name: 'Sashka',
      avatarUrl: AVATAR_URL,
      isPro: false
    },
    comment: 'comment3. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 2
  },
  {
    id: crypto.randomUUID(),
    date: new Date().toDateString(),
    user: {
      name: 'Angelina',
      avatarUrl: AVATAR_URL,
      isPro: true
    },
    comment: 'comment4. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 1
  }
];
