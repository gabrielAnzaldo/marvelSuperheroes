import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
            <Link key={singleSuperHero.id} to={`/${singleSuperHero.id}`}>
              <SuperHeroItem heroData={singleSuperHero} />
            </Link>
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
