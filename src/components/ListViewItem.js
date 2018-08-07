import React from 'react';
import PropTypes from 'prop-types';

const ListViewItem = ({ title, subTitle, active, handleOnClick }) => (
  <button
    type="button"
    className={`movie__item ${active && 'movie__item--state-active'}`}
    onClick={handleOnClick}
  >
    <h4 className="movie__item__heading">{title}</h4>
    <p className="movie__item__subtitle">{subTitle}</p>
  </button>
);

ListViewItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleOnClick: PropTypes.func.isRequired
};

export default ListViewItem;
