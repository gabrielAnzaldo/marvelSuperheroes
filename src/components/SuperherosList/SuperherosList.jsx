import React from 'react';
import PropTypes from 'prop-types';

export default class SuperHerosList extends React.Component {
  componentDidMount() {
    const { getSuperHeros } = this.props;
    getSuperHeros();
  }

  render() {
    const { superHeros } = this.props;
    return (
      <div>
        {superHeros && superHeros.length > 0 ? (
          superHeros.map(singleSuperHero => (
            <p key={singleSuperHero.id}>{singleSuperHero.name}</p>
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
