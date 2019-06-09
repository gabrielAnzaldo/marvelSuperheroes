import { connect } from 'react-redux';
import SuperHeroDetail from './SuperHeroDetail';

const mapStateToProps = state => ({
  selectedSuperhero: state.selectedSuperhero,
});
export default connect(mapStateToProps)(SuperHeroDetail);
