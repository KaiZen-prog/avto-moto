import React, {lazy, Suspense } from "react";
import PropTypes from "prop-types";
import {changeInfoTab} from "../../store/actions";
import {connect} from "react-redux";
import {infoTabsMocks} from "../../mocks/mocks";

const Characteristics = lazy(() => import(`../characteristics/characteristics`));
const Contacts = lazy(() => import(`../contacts/contacts`));
const Reviews = lazy(() => import(`../reviews/reviews`));

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
        <Suspense fallback={<div>Загрузка...</div>}>
          <Characteristics isTabActive={activeInfoTab === infoTabsMocks.CHARACTERISTICS}/>
        </Suspense>

        <Suspense fallback={<div>Загрузка...</div>}>
          <Reviews isTabActive={activeInfoTab === infoTabsMocks.REVIEWS}/>
        </Suspense>

        <Suspense fallback={<div>Загрузка...</div>}>
          <Contacts isTabActive={activeInfoTab === infoTabsMocks.CONTACTS}/>
        </Suspense>
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
