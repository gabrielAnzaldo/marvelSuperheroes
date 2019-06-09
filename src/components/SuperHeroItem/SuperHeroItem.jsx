import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

export default class SuperHeroItem extends React.Component {
  onSelectSuperhero = event => {
    console.log('event', event);
  };

  render() {
    const { name } = this.props;
    return (
      <button
        type="button"
        className={styles.superHeroItem}
        onClick={this.onSelectSuperhero}
      >
        <div>{name}</div>
      </button>
    );
  }
}

SuperHeroItem.propTypes = {
  name: PropTypes.string.isRequired,
};
