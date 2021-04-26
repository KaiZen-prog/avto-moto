import React from "react";
import PropTypes from "prop-types";

const Reviews = ({isActive}) => {
  return (
    <div className={`info-tab__slide reviews${
      isActive ? `` : ` hidden`
    }`}>
      Здесь будут комментарии
    </div>
  );
};

Reviews.displayName = `Reviews`;

Reviews.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Reviews;
