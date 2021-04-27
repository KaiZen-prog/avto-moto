import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {KeyCode} from '../const';
import {addReview} from '../store/actions';

export const withReviews = (Component) => {
  class WithReviews extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFormOpened: false
      };

      this.onReviewFormOpen = this.onReviewFormOpen.bind(this);
      this.onReviewFormClose = this.onReviewFormClose.bind(this);
      this.closePopupKeydown = this.closePopupKeydown.bind(this);
    }

    closePopupKeydown(evt) {
      if (evt.keyCode === KeyCode.ESC) {
        this.onReviewFormClose();
      }
    }

    onReviewFormOpen() {
      this.setState({isFormOpened: true});

      document.documentElement.style.overflow = `hidden`;
      document.addEventListener(`keydown`, this.closePopupKeydown);
    }

    onReviewFormClose() {
      this.setState({isFormOpened: false});

      document.documentElement.style.overflow = `auto`;
      document.removeEventListener(`keydown`, this.closePopupKeydown);
    }

    render() {
      return (
        <Component
          {...this.props}
          isFormOpened={this.state.isFormOpened}
          onReviewFormOpen={this.onReviewFormOpen}
          onReviewFormClose={this.onReviewFormClose}
        />
      );
    }
  }

  WithReviews.propTypes = {
    addReview: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    reviews: state.REVIEWS.reviews
  });

  const mapDispatchToProps = (dispatch) => ({
    addReview(review) {
      dispatch(addReview(review));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReviews);
};
