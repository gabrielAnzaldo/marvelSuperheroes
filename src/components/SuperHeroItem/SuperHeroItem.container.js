import { connect } from 'react-redux';
import SuperHeroItem from './SuperHeroItem';
import { setSelectedHero } from '../../actions';

export default connect(
  null,
  { setSelectedHero },
)(SuperHeroItem);
