import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import styles from './styles.scss';

const SuperHeroDetail = ({ selectedSuperhero }) => {
  return (
    <div className={styles.superHeroDetail}>
      {selectedSuperhero ? (
        <div className={styles.superHeroDetailInfo}>
          <img
            className={styles.superHeroDetailInfoItem}
            src={`${selectedSuperhero.thumbnail.path}/portrait_xlarge.jpg`}
            alt="hero info"
          />
          <div className={styles.superHeroDetailInfoItem}>
            <b>{selectedSuperhero.name}</b>
            <p>{selectedSuperhero.description}</p>
            <div>
              <ul>
                {selectedSuperhero.urls.map(({ url, type }) => (
                  <li key={uuidv4()}>
                    <a href={url}>{type}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>select your favorite hero!</div>
      )}
    </div>
  );
};

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
