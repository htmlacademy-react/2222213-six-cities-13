import React, { useEffect } from 'react';
import Review from './review-item';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchReviews } from '../../store/api-actions/review-api';

type ReviewListProps = {
  id: string | undefined;
}

function ReviewList({id}: ReviewListProps): React.JSX.Element {

  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviews.reviews);
  const sortReview = [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  useEffect(() => {
    if(id) {
      dispatch(fetchReviews({id}));
    }
  }, [dispatch, id]);

  return (
    <ul className="reviews__list">
      {sortReview.slice(0, 10).map((review) => <Review key={review.id} review={review}/>)}
    </ul>
  );
}

export default ReviewList;
