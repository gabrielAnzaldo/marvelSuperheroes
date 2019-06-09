import React from 'react';
import styles from './styles.scss';

export default class SuperHeroDetail extends React.Component {
  componentDidMount() {
    console.log('details here');
  }

  render() {
    return <div className={styles.superHeroDetail}>hero detail here</div>;
  }
}
