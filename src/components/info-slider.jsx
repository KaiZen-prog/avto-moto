import React from "react";

const InfoSlider = () => {
  return (
    <div>
      <div className="info-slider">
        <ul className="info-slider__buttons-list">
          <li>
            <a className="info-slider__buttons-item info-slider__buttons-item--active" href="#nowhere">Характеристики</a>
          </li>

          <li>
            <a className="info-slider__buttons-item" href="#nowhere">Отзывы</a>
          </li>

          <li>
            <a className="info-slider__buttons-item" href="#nowhere">Контакты</a>
          </li>
        </ul>

        <div className="info-slider__slides">
          <div className="info-slider__slide info-slider__slide--active">
            <table className="info-slider__parameters">
              <tr className="info-slider__parameter">
                <td className="info-slider__value">
                  Трансмиссия
                </td>

                <td className="card__value">
                  Роботизированная
                </td>
              </tr>

              <tr className="info-slider__parameter">
                <td className="info-slider__value">
                  Мощность двигателя, л.с.
                </td>

                <td className="card__value">
                  249
                </td>
              </tr>

              <tr className="info-slider__parameter">
                <td className="info-slider__value">
                  Тип двигателя
                </td>

                <td className="card__value">
                  Бензиновый
                </td>
              </tr>

              <tr className="info-slider__parameter">
                <td className="info-slider__value">
                  Привод
                </td>

                <td className="card__value">
                  Полный
                </td>
              </tr>

              <tr className="info-slider__parameter">
                <td className="info-slider__value">
                  Объем двигателя, л
                </td>

                <td className="card__value">
                  2.4
                </td>
              </tr>

              <tr className="info-slider__parameter">
                <td className="info-slider__value">
                  Макс. крутящий момент
                </td>

                <td className="card__value">
                  370/4500
                </td>
              </tr>

              <tr className="info-slider__parameter">
                <td className="info-slider__value">
                  Количество цилиндров
                </td>

                <td className="card__value">
                  4
                </td>
              </tr>
            </table>
          </div>

          <div className="info-slider__slide">
            Здесь будут комментарии
          </div>

          <div className="info-slider__slide">
            <div className="info-slider__contacts-block">
              <p className="info-slider__contacts-title">
                Адрес
              </p>
              <p className="info-slider__contacts-line">
                Санкт-Петербург, набережная реки Карповки, дом 5
              </p>

              <p className="info-slider__contacts-title">
                Режим работы
              </p>
              <p className="info-slider__contacts-line">
                Ежедневно, с 10:00 до 21:00
              </p>

              <p className="info-slider__contacts-title">
                Телефон
              </p>
              <p className="info-slider__contacts-line">
                8 (800) 333-55-99
              </p>

              <p className="info-slider__contacts-title">
                E-mail
              </p>
              <p className="info-slider__contacts-line">
                info@avto-moto.ru
              </p>
            </div>
            <div className="info-slider__map">
              Здесь будет карта
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoSlider.displayName = `InfoSlider`;

export default InfoSlider;
