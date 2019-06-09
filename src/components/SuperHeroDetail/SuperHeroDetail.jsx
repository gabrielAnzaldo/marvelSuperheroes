import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const SuperHeroDetail = ({ selectedSuperhero }) => (
  <div className={styles.superHeroDetail}>
    {selectedSuperhero ? (
      <div> {selectedSuperhero.name}</div>
    ) : (
      <div>select your favorite hero!</div>
    )}
  </div>
);

export default SuperHeroDetail;

SuperHeroDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  selectedSuperhero: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

SuperHeroDetail.defaultProps = {
  selectedSuperhero: null,
};
