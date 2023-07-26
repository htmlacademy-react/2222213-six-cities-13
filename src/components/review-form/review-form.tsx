import React, {useState, ChangeEvent, Fragment} from 'react';

const ratingAndTitle = {
  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
};

function ReviewsForm(): React.JSX.Element {
  const [formData, setFormData] = useState({
    rating: '0',
    text: ''
  });

  function handleTextChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      text: evt.target.value
    });
  }

  function handleRatingChange(evt: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      rating: evt.target.value
    });
  }

  return (
    <form className="reviews__form form" action="#" method="post">
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
                defaultValue={rating}
                id={`${rating}-stars`}
                type="radio"
                onChange={handleRatingChange}
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
        defaultValue={''}
        onChange={handleTextChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe
          your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
