import React from 'react';
import PropTypes from 'prop-types';
import {Repeat} from '../utils/common';

const ReviewForm = ({onReviewFormClose}) => {
  return (
    <div className="reviews__review-form review-form" onClick={onReviewFormClose}>
      <form action="#" className="review-form__form">
        <h3 className="review-form__title">Оставить отзыв</h3>
        <button type="button" className="review-form__close-button" onClick={onReviewFormClose}><span className="visually-hidden">Закрыть окно</span></button>

        <div className="review-form__wrapper">
          <div className="review-form__required-wrapper">
            <label htmlFor="name">
              <span className="review-form__required-message review-form__required-message--name">Пожалуйста, заполните поле</span>
              <span className="review-form__required-star"></span>
            </label>
            <input
              className="review-form__input review-form__input--required review-form__input--name"
              type="text"
              name="name"
              id="name"
              placeholder="Имя"
              value={localStorage.getItem(`name`) !== null ? localStorage.getItem(`name`) : ``}
              autoFocus/>
          </div>

          <input
            className="review-form__input review-form__input--advantage"
            type="text"
            name="advantage"
            id="advantage"
            placeholder="Достоинства"
            value={localStorage.getItem(`advantage`) !== null ? localStorage.getItem(`advantage`) : ``}
          />
          <input
            className="review-form__input"
            type="text"
            name="disadvantage"
            id="disadvantage"
            placeholder="Недостатки"
            value={localStorage.getItem(`disadvantage`) !== null ? localStorage.getItem(`disadvantage`) : ``}
          />

          <div className="review-form__rating">
            <span className="review-form__rating-title">Оцените товар:</span>
            <div>
              <Repeat numTimes={5}>
                {(i) => (
                  <input
                    key={i}
                    className="review-form__radio"
                    type="radio"
                    id={`star-${i + 1}`}
                    name="rating"
                    value={i + 1}
                    defaultChecked={localStorage.getItem(`rating`) === `${i + 1}` ? `defaultChecked` : ``}/>
                )}
              </Repeat>
              <Repeat numTimes={5}>
                {(i) => (
                  <label key={i} className="review-form__star" htmlFor={`star-${i + 1}`}></label>
                )}
              </Repeat>
            </div>
          </div>

          <div className="review-form__required-wrapper">
            <label htmlFor="comment">
              <span className="review-form__required-message review-form__required-message--comment">Пожалуйста, заполните поле</span>
              <span className="review-form__required-star"></span>
            </label>
            <textarea
              className="review-form__input review-form__input--required review-form__input--comment"
              type="text"
              name="comment"
              id="comment"
              placeholder="Комментарий"
              value={localStorage.getItem(`comment`) !== null ? localStorage.getItem(`comment`) : ``}
            />
          </div>
        </div>
        <button className="review-form__submit-button" type="submit">Оставить отзыв</button>
      </form>
    </div>
  );
};

ReviewForm.propTypes = {
  onReviewFormClose: PropTypes.func.isRequired,
};

export default ReviewForm;
