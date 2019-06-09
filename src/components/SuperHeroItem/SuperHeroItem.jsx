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
      heroData: { name, thumbnail, comics, series, events, stories },
    } = this.props;

    return (
      <div>
        <div onClick={this.onSelectSuperHero} role="presentation">
          <div className={styles.superHeroItem}>
            <img
              className={styles.superHeroDetailInfoItem}
              src={`${thumbnail.path}/portrait_xlarge.jpg`}
              alt="hero info"
            />
            <div className={styles.superHeroDetailInfoItem}>
              <b>{name}</b>
              {/* TODO: refactor, kind of repeated logic */}
              <div>
                <span>appears in:</span>
                <br />
                <span>
                  comics: {comics.items.length > 0 ? 'YES!' : 'NO :('}
                </span>
                <br />
                <span>
                  series: {series.items.length > 0 ? 'YES!' : 'NO :('}
                </span>
                <br />
                <span>
                  events: {events.items.length > 0 ? 'YES!' : 'NO :('}
                </span>
                <br />
                <span>
                  stories: {stories.items.length > 0 ? 'YES!' : 'NO :('}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SuperHeroItem.propTypes = {
  setSelectedHero: PropTypes.func.isRequired,
  heroData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
