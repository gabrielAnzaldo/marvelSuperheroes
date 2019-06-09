import { connect } from 'react-redux';

import SuperHerosList from './SuperherosList';
import { getSuperHeros } from '../../actions';

const mapStateToProps = state => ({
  superHeros: state.superHeros || [],
});

export default connect(
  mapStateToProps,
  { getSuperHeros },
)(SuperHerosList);
