import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers.ts';
import {reviews} from './mocks/reviews.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { fetchOffers } from './store/api-actions/offers-api.ts';

store.dispatch(fetchOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
