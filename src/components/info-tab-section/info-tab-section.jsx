import React from "react";
import PropTypes from "prop-types";
import {changeInfoTab} from "../../store/actions";
import {connect} from "react-redux";
import Characteristics from "../characteristics/characteristics";
import Contacts from "../contacts/contacts";
import Reviews from "../reviews/reviews";
import {infoTabsMocks} from "../../mocks/mocks";

const InfoTabSection = (props) => {

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
                activeInfoTab === infoTabsMocks.CHARACTERISTICS ? ` info-tab__buttons-item--active` : ``
              }`
            }
            onClick={() => {
              onInfoTabChange(infoTabsMocks.CHARACTERISTICS);
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
                activeInfoTab === infoTabsMocks.REVIEWS ? ` info-tab__buttons-item--active` : ``
              }`
            }
            onClick={() => {
              onInfoTabChange(infoTabsMocks.REVIEWS);
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
                activeInfoTab === infoTabsMocks.CONTACTS ? ` info-tab__buttons-item--active` : ``
              }`
            }
            onClick={() => {
              onInfoTabChange(infoTabsMocks.CONTACTS);
            }}
            href="#nowhere"
          >
            Контакты
          </a>
        </li>
      </ul>

      <div className="info-tab__slides">
        <Characteristics isTabActive={activeInfoTab === infoTabsMocks.CHARACTERISTICS}/>
        <Reviews isTabActive={activeInfoTab === infoTabsMocks.REVIEWS}/>
        <Contacts isTabActive={activeInfoTab === infoTabsMocks.CONTACTS}/>
      </div>
    </section>
  );
};

InfoTabSection.displayName = `InfoTabSection`;

InfoTabSection.propTypes = {
  activeInfoTab: PropTypes.string.isRequired,

  onInfoTabChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeInfoTab: state.APP_PROCESS.activeInfoTab,
});

const mapDispatchToProps = (dispatch) => ({
  onInfoTabChange(tab) {
    dispatch(changeInfoTab(tab));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoTabSection);
