import React, {useState, ChangeEvent, Fragment} from 'react';
import { TOffer } from '../../types/offer-type';
import { useAppDispatch } from '../hooks';
import { addReviews, fetchReviews } from '../../store/api-actions/review-api';

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

const initialState = {
  comment: '',
  rating: 0,
  isDisabled: false,
  minLength: 50,
  maxLength: 300,
};

function ReviewsForm({id}: TReviewFormProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState(initialState);

  function handleTextChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      comment: evt.target.value,
      minLength: formData.minLength,
      maxLength: formData.maxLength
    });
  }

  function handleRatingChange(evt: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      rating: Number(evt.target.value)
    });
  }

  function handelSubmit() {
    const { comment, rating } = formData;
    if(id) {
      setFormData({ ...formData, isDisabled: true });
      dispatch(addReviews({
        id,
        reviewData: { comment, rating }
      })).then((req) => {
        const request = req.payload;
        if(request) {
          setFormData(initialState);
          dispatch(fetchReviews(id));
        } else {
          setFormData({ ...formData, isDisabled: false });
        }
      }).catch((error: Error) => {
        const err = error;
        setFormData({ ...formData, isDisabled: false });
        return err;
      });
    }
  }

  const isValid = formData.comment.length >= formData.minLength &&
    formData.comment.length <= formData.maxLength &&
    formData.rating !== 0;

  return (
    <form className="reviews__form form" onSubmit={(evt) => {
      evt.preventDefault();
      handelSubmit();
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
                className="form__rating-input visually-hidden"
                name="rating"
                value={rating}
                id={`${rating}-stars`}
                type="radio"
                checked={String(formData.rating) === rating}
                onChange={handleRatingChange}
                disabled={formData.isDisabled}
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
        required
        onChange={handleTextChange}
        disabled={formData.isDisabled}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{formData.minLength - formData.comment.length <= 0 ? '' : formData.minLength - formData.comment.length} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || formData.isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
