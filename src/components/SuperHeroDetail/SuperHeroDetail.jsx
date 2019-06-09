import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

export default class SuperHeroDetail extends React.Component {
  componentDidMount() {
    console.log('props: ', this.props);
  }

  render() {
    return (
      <div className={styles.superHeroDetail}>select your favorite hero!</div>
    );
  }
}

SuperHeroDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
