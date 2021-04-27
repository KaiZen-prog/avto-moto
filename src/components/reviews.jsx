import React from "react";
import PropTypes from "prop-types";
import {withReviews} from '../hocs/with-reviews';
import ReviewForm from '../components/review-form';

const Reviews = ({isTabActive, isFormOpened, onReviewFormOpen, onReviewFormClose}) => {
  return (
    <div className={`info-tab__slide reviews${
      isTabActive ? `` : ` hidden`
    }`}>
      <button className="reviews__add-review-button" onClick={onReviewFormOpen}>Оставить отзыв</button>
      <div className="reviews__review">
        <h2 className="reviews__author">Борис Иванов</h2>

        <ul className="reviews__elements-list">
          <li className="reviews__element reviews__element--advantage">
            <h4 className="reviews__title">Достоинства</h4>
            <p className="reviews__value">мощность, внешний вид</p>
          </li>
          <li className="reviews__element reviews__element--disadvantage">
            <h4 className="reviews__title">Недостатки</h4>
            <p className="reviews__value">Слабые тормозные колодки (пришлось заменить)</p>
          </li>
          <li className="reviews__element">
            <h4 className="reviews__title">Комментарий</h4>
            <p className="reviews__value">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</p>
          </li>
        </ul>

        <div className="reviews__rating-container">
          <div className="reviews__rating-wrapper">
            <span className="reviews__star reviews__star--active"></span>
            <span className="reviews__star reviews__star--active"></span>
            <span className="reviews__star reviews__star--active"></span>
            <span className="reviews__star"></span>
            <span className="reviews__star"></span>
          </div>
          <span className="reviews__is-recommended">Советует</span>
        </div>

        <div className="reviews__footer">
          <span className="reviews__time">1 минуту назад</span>
          <a className="reviews__answer-button" href="#">Ответить</a>
        </div>
      </div>

      <div className="reviews__review">
        <h2 className="reviews__author">Марсель Исмагилов</h2>

        <ul className="reviews__elements-list">
          <li className="reviews__element reviews__element--advantage">
            <h4 className="reviews__title">Достоинства</h4>
            <p className="reviews__value">Cтиль, комфорт, управляемость</p>
          </li>
          <li className="reviews__element reviews__element--disadvantage">
            <h4 className="reviews__title">Недостатки</h4>
            <p className="reviews__value">Дорогой ремонт и обслуживание</p>
          </li>
          <li className="reviews__element">
            <h4 className="reviews__title">Комментарий</h4>
            <p className="reviews__value">Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</p>
          </li>
        </ul>

        <div className="reviews__rating-container">
          <div className="reviews__rating-wrapper">
            <span className="reviews__star reviews__star--active"></span>
            <span className="reviews__star reviews__star--active"></span>
            <span className="reviews__star reviews__star--active"></span>
            <span className="reviews__star"></span>
            <span className="reviews__star"></span>
          </div>
          <span className="reviews__is-recommended">Советует</span>
        </div>

        <div className="reviews__footer">
          <span className="reviews__time">1 минуту назад</span>
          <a className="reviews__answer-button" href="#">Ответить</a>
        </div>
      </div>

      {isFormOpened && (
        <ReviewForm
          onReviewFormClose={onReviewFormClose}
        />
      )}
    </div>
  );
};

Reviews.displayName = `Reviews`;

Reviews.propTypes = {
  isTabActive: PropTypes.bool.isRequired,

  isFormOpened: PropTypes.bool.isRequired,
  onReviewFormOpen: PropTypes.func.isRequired,
  onReviewFormClose: PropTypes.func.isRequired,
};

export default withReviews(Reviews);
