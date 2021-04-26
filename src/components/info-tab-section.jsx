import React from "react";
import PropTypes from "prop-types";
import {changeInfoTab} from "../store/actions";
import {connect} from "react-redux";
import {InfoTabs} from "../const";
import Characteristics from "./characteristics";
import Contacts from "./contacts";

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
        <Characteristics isActive={activeInfoTab === InfoTabs.CHARACTERISTICS}/>

        <div
          className={
            `info-tab__slide${
              activeInfoTab === InfoTabs.REVIEWS ? `` : ` hidden`
            }`
          }
        >
          Здесь будут комментарии
        </div>

        <Contacts isActive={activeInfoTab === InfoTabs.CONTACTS}/>
      </div>
    </section>
  );
};

InfoTabSection.displayName = `InfoTabSection`;

InfoTabSection.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoTabSection);
