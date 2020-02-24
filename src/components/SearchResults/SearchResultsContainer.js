import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getSearchCards} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;

  return {
    cards: getSearchCards(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);