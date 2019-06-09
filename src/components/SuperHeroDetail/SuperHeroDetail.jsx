import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

export default class SuperHeroDetail extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      selectedSuperhero,
    } = this.props;
    console.log('test...', id, selectedSuperhero);
  }

  render() {
    const { selectedSuperhero } = this.props;
    return (
      <div className={styles.superHeroDetail}>
        {selectedSuperhero ? (
          <div> {selectedSuperhero.name}</div>
        ) : (
          <div>select your favorite hero!</div>
        )}
      </div>
    );
  }
}

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
