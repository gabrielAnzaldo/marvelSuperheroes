import { connect } from 'react-redux';
import SuperHeroDetail from './SuperHeroDetail';

const mapStateToProps = (state, props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  let { selectedSuperhero = null } = state;
  const { superHeros = [] } = state;

  if (!selectedSuperhero) {
    if (id) {
      selectedSuperhero = superHeros.find(item => item.id === parseInt(id, 10));
    }
  }

  return {
    selectedSuperhero,
  };
};
export default connect(mapStateToProps)(SuperHeroDetail);
