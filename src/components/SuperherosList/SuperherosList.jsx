import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import SuperHeroItem from '../SuperHeroItem';

export default class SuperHerosList extends React.Component {
  componentDidMount() {
    const { getSuperHeros } = this.props;
    getSuperHeros();
  }

  render() {
    const { superHeros } = this.props;
    return (
      <div className={styles.superHeroesList}>
        {superHeros && superHeros.length > 0 ? (
          superHeros.map(singleSuperHero => (
            <SuperHeroItem
              key={singleSuperHero.id}
              name={singleSuperHero.name}
            />
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    );
  }
}

SuperHerosList.propTypes = {
  getSuperHeros: PropTypes.func.isRequired,
  superHeros: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
