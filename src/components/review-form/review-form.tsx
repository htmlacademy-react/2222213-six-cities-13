import React, {ChangeEvent, Fragment, useEffect} from 'react';
import { TOffer } from '../../types/offer-type';
import { useAppDispatch, useAppSelector } from '../hooks';
import { submitReview } from '../../store/api-actions/review-api';
import { setFormReviewValid, updateComment, updateRating } from '../../store/slices/review-form.slices';

const ratingAndTitle = {
  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
};

type TReviewFormProps = {
  id: TOffer['id'] | undefined;
}

enum ReviewLength {
  Min = 50,
  Max = 300
}

function ReviewsForm({id}: TReviewFormProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.reviewForm);

  function handleCommentChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(evt.target.value));
  }

  function handleRatingChange(evt: ChangeEvent<HTMLInputElement>) {
    dispatch(updateRating(Number(evt.target.value)));
  }

  useEffect(() => {
    if (formData.comment.length >= ReviewLength.Min && formData.comment.length <= ReviewLength.Max && formData.rating !== null) {
      dispatch(setFormReviewValid(true));
    } else {
      dispatch(setFormReviewValid(false));
    }
  }, [dispatch, formData]);

  function handleFormSubmit() {
    const { comment, rating } = formData;
    if (id) {
      dispatch(submitReview({
        id,
        reviewData: { comment, rating }
      }));
    }
  }

  return (
    <form className="reviews__form form" onSubmit={(evt) => {
      evt.preventDefault();
      handleFormSubmit();
    }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(ratingAndTitle)
          .reverse()
          .map(([rating, title]) => (
            <Fragment key={rating}>
              <input
                required
                className="form__rating-input visually-hidden"
                name="rating"
                id={`${rating}-stars`}
                type="radio"
                value={rating}
                checked={String(formData.rating) === rating}
                onChange={handleRatingChange}
                disabled={formData.isSends}
              />
              <label
                htmlFor={`${rating}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        minLength={ReviewLength.Min}
        required
        onChange={handleCommentChange}
        disabled={formData.isSends}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!formData.isValid || formData.isSends}
        >
          {formData.isSends ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
