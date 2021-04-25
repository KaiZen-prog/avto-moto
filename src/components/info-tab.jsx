import React from "react";
import PropTypes from "prop-types";
import {changeInfoTab} from "../store/actions";
import {connect} from "react-redux";
import {InfoTabs} from "../const";

const InfoTab = (props) => {

  const {
    activeInfoTab,
    onInfoTabChange
  } = props;

  return (
    <section className="info-tab">
      <ul className="info-tab__buttons-list">
        <li>
          <a
            className={
              `info-tab__buttons-item${
                activeInfoTab === InfoTabs.CHARACTERISTICS ? ` info-tab__buttons-item--active` : ``
              }`
            }
            onClick={() => {
              onInfoTabChange(InfoTabs.CHARACTERISTICS);
            }}
            href="#nowhere"
          >
            Характеристики
          </a>
        </li>

        <li>
          <a
            className={
              `info-tab__buttons-item${
                activeInfoTab === InfoTabs.REVIEWS ? ` info-tab__buttons-item--active` : ``
              }`
            }
            onClick={() => {
              onInfoTabChange(InfoTabs.REVIEWS);
            }}
            href="#nowhere"
          >
            Отзывы
          </a>
        </li>

        <li>
          <a
            className={
              `info-tab__buttons-item${
                activeInfoTab === InfoTabs.CONTACTS ? ` info-tab__buttons-item--active` : ``
              }`
            }
            onClick={() => {
              onInfoTabChange(InfoTabs.CONTACTS);
            }}
            href="#nowhere"
          >
            Контакты
          </a>
        </li>
      </ul>

      <div className="info-tab__slides">
        <div
          className={
            `info-tab__slide info-tab__slide--characteristics${
              activeInfoTab === InfoTabs.CHARACTERISTICS ? `` : ` hidden`
            }`
          }
        >
          <table className="info-tab__parameters">
            <tr className="info-tab__line">
              <td className="info-tab__parameter">
                Трансмиссия
              </td>

              <td className="info-tab__value">
                Роботизированная
              </td>
            </tr>

            <tr className="info-tab__line">
              <td className="info-tab__parameter">
                Мощность двигателя, л.с.
              </td>

              <td className="info-tab__value">
                249
              </td>
            </tr>

            <tr className="info-tab__line">
              <td className="info-tab__parameter">
                Тип двигателя
              </td>

              <td className="info-tab__value">
                Бензиновый
              </td>
            </tr>

            <tr className="info-tab__line">
              <td className="info-tab__parameter">
                Привод
              </td>

              <td className="info-tab__value">
                Полный
              </td>
            </tr>

            <tr className="info-tab__line">
              <td className="info-tab__parameter">
                Объем двигателя, л
              </td>

              <td className="info-tab__value">
                2.4
              </td>
            </tr>

            <tr className="info-tab__line">
              <td className="info-tab__parameter">
                Макс. крутящий момент
              </td>

              <td className="info-tab__value">
                370/4500
              </td>
            </tr>

            <tr className="info-tab__line">
              <td className="info-tab__parameter">
                Количество цилиндров
              </td>

              <td className="info-tab__value">
                4
              </td>
            </tr>
          </table>
        </div>

        <div
          className={
            `info-tab__slide${
              activeInfoTab === InfoTabs.REVIEWS ? `` : ` hidden`
            }`
          }
        >
          Здесь будут комментарии
        </div>

        <div
          className={
            `info-tab__slide${
              activeInfoTab === InfoTabs.CONTACTS ? `` : ` hidden`
            }`
          }
        >
          <div className="info-tab__map-wrapper">
            <div className="info-tab__contacts-block">
              <p className="info-tab__contacts-title info-tab__contacts-title--address">
                Адрес
              </p>
              <p className="info-tab__contacts-line">
                <p className="info-tab__contacts-line info-tab__address-line">Санкт-Петербург,</p>
                <p className="info-tab__contacts-line info-tab__address-line">набережная реки Карповки, дом 5</p>
              </p>

              <p className="info-tab__contacts-title">
                Режим работы
              </p>
              <p className="info-tab__contacts-line">
                Ежедневно, с 10:00 до 21:00
              </p>

              <p className="info-tab__contacts-title">
                Телефон
              </p>
              <p className="info-tab__contacts-line">
                8 (800) 333-55-99
              </p>

              <p className="info-tab__contacts-title">
                E-mail
              </p>
              <p className="info-tab__contacts-line">
                info@avto-moto.ru
              </p>
            </div>
            <div id="map" className="info-tab__map-container">
              <img className="info-tab__map-img" src="img/map.jpg" width="431" height="271"
                alt="Санкт-Петербург, набережная реки Карповки, дом 5"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

InfoTab.displayName = `InfoTab`;

InfoTab.propTypes = {
  activeInfoTab: PropTypes.string.isRequired,

  onInfoTabChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeInfoTab: state.APP_PROCESS.activeInfoTab,
});

const mapDispatchToProps = (dispatch) => ({
  onInfoTabChange(tab) {
    dispatch(changeInfoTab(tab));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoTab);
