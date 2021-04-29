import React from "react";
import PropTypes from "prop-types";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {mapDataMocks} from "../mocks/mocks";

const Contacts = ({isTabActive}) => {
  return (
    <div className={`info-tab__slide contacts${
      isTabActive ? `` : ` hidden`
    }`}>
      <h2 className="visually-hidden">Контакты</h2>
      <div className="contacts__wrapper">
        <div className="contacts__address-block">
          <h3 className="contacts__title contacts__title--address">
            Адрес
          </h3>
          <p className="contacts__line">
            <p className="contacts__line contacts__line--address-line">Санкт-Петербург,</p>
            <p className="contacts__line contacts__line--address-line">набережная реки Карповки, дом 5</p>
          </p>

          <h3 className="contacts__title">
            Режим работы
          </h3>
          <p className="contacts__line">
            Ежедневно, с 10:00 до 21:00
          </p>

          <h3 className="contacts__title">
            Телефон
          </h3>
          <p className="contacts__line">
            8 (800) 333-55-99
          </p>

          <h3 className="contacts__title">
            E-mail
          </h3>
          <p className="contacts__line">
            info@avto-moto.ru
          </p>
        </div>
        <div className="contacts__map-container">
          <img className="contacts__map-img" src="img/map.jpg" width="431" height="271"
            alt="Санкт-Петербург, набережная реки Карповки, дом 5"/>
          <div className="contacts__map">
            <YMaps>
              <Map
                defaultState={{
                  center: mapDataMocks.CENTER,
                  zoom: mapDataMocks.ZOOM,
                }}
                width={mapDataMocks.WIDTH}
                height={mapDataMocks.HEIGHT}
              >
                <Placemark geometry={mapDataMocks.MARK} />
              </Map>
            </YMaps>
          </div>
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
