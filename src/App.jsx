import React from 'react';
import SuperHerosList from './components/SuperherosList';
import SuperHeroDetail from './components/SuperHeroDetail';
import styles from './sass/index.scss';

const App = () => (
  <div className={styles.splitLayout}>
    <SuperHerosList />
    <SuperHeroDetail />
  </div>
);

export default App;
