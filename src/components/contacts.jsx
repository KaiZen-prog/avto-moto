import React from "react";
import PropTypes from "prop-types";

const Contacts = ({isTabActive}) => {
  return (
    <div className={`info-tab__slide contacts${
      isTabActive ? `` : ` hidden`
    }`}>
      <div className="contacts__wrapper">
        <div className="contacts__address-block">
          <p className="contacts__title contacts__title--address">
            Адрес
          </p>
          <p className="contacts__line">
            <p className="contacts__line contacts__line--address-line">Санкт-Петербург,</p>
            <p className="contacts__line contacts__line--address-line">набережная реки Карповки, дом 5</p>
          </p>

          <p className="contacts__title">
            Режим работы
          </p>
          <p className="contacts__line">
            Ежедневно, с 10:00 до 21:00
          </p>

          <p className="contacts__title">
            Телефон
          </p>
          <p className="contacts__line">
            8 (800) 333-55-99
          </p>

          <p className="contacts__title">
            E-mail
          </p>
          <p className="contacts__line">
            info@avto-moto.ru
          </p>
        </div>
        <div id="map" className="contacts__map-container">
          <img className="contacts__map-img" src="img/map.jpg" width="431" height="271"
            alt="Санкт-Петербург, набережная реки Карповки, дом 5"/>
        </div>
      </div>
    </div>
  );
};

Contacts.displayName = `Contacts`;

Contacts.propTypes = {
  isTabActive: PropTypes.bool.isRequired,
};

export default Contacts;
