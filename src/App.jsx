import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SuperHerosList from './components/SuperherosList';
import SuperHeroDetail from './components/SuperHeroDetail';
import styles from './sass/index.scss';

const App = () => (
  <Router>
    <div className={styles.splitLayout}>
      <SuperHerosList />
      <Route path="/:id?" component={SuperHeroDetail} />
    </div>
  </Router>
);

export default App;
