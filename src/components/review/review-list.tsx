import React, { useEffect } from 'react';
import Review from './review-item';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchReviews } from '../../store/api-actions/review-api';

type ReviewListProps = {
  id: string | undefined;
}

function ReviewList({id}: ReviewListProps): React.JSX.Element {

  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviews);

  useEffect(() => {
    if(id) {
      dispatch(fetchReviews(id));
    }
  }, [dispatch, id]);

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} review={review}/>)}
    </ul>
  );
}

export default ReviewList;
