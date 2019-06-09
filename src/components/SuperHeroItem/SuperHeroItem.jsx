import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

export default class SuperHeroItem extends React.Component {
  onSelectSuperHero = () => {
    const { setSelectedHero, heroData } = this.props;
    setSelectedHero(heroData);
  };

  render() {
    const {
      heroData: { name },
    } = this.props;
    return (
      <button
        type="button"
        className={styles.superHeroItem}
        onClick={this.onSelectSuperHero}
      >
        <div>{name}</div>
      </button>
    );
  }
}

SuperHeroItem.propTypes = {
  setSelectedHero: PropTypes.func.isRequired,
  heroData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
