import React from 'react';
import {TReviews} from '../../types/review-type';
import Review from './review-item';

type TReviewListProps = {
  reviews: TReviews;
}

function ReviewList(props: TReviewListProps): React.JSX.Element {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} review={review}/>)}
    </ul>
  );
}

export default ReviewList;
