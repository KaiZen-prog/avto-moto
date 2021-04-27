import React from "react";
import PropTypes from "prop-types";

const Characteristics = ({isTabActive}) => {
  return (
    <div className={`info-tab__slide info-tab__slide--characteristics characteristics${
      isTabActive ? `` : ` hidden`
    }`}>
      <table className="characteristics__parameters">
        <tr className="characteristics__line">
          <td className="characteristics__parameter">
            Трансмиссия
          </td>

          <td className="characteristics__value">
            Роботизированная
          </td>
        </tr>

        <tr className="characteristics__line">
          <td className="characteristics__parameter">
            Мощность двигателя, л.с.
          </td>

          <td className="characteristics__value">
            249
          </td>
        </tr>

        <tr className="characteristics__line">
          <td className="characteristics__parameter">
            Тип двигателя
          </td>

          <td className="characteristics__value">
            Бензиновый
          </td>
        </tr>

        <tr className="characteristics__line">
          <td className="characteristics__parameter">
            Привод
          </td>

          <td className="characteristics__value">
            Полный
          </td>
        </tr>

        <tr className="characteristics__line">
          <td className="characteristics__parameter">
            Объем двигателя, л
          </td>

          <td className="characteristics__value">
            2.4
          </td>
        </tr>

        <tr className="characteristics__line">
          <td className="characteristics__parameter">
            Макс. крутящий момент
          </td>

          <td className="characteristics__value">
            370/4500
          </td>
        </tr>

        <tr className="characteristics__line">
          <td className="characteristics__parameter">
            Количество цилиндров
          </td>

          <td className="characteristics__value">
            4
          </td>
        </tr>
      </table>
    </div>
  );
};

Characteristics.displayName = `Characteristics`;

Characteristics.propTypes = {
  isTabActive: PropTypes.bool.isRequired,
};

export default Characteristics;
