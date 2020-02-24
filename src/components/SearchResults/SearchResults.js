import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container';
// import Icon from '../Icons/Icon.js';
// import {settings} from '../../data/dataStore';
// import {Link} from 'react-router-dom';

const SearchResults = ({cards}) => (
  // <Link to={`/${id}`} className={styles.link}>
  <Container>
    <section className={styles.component}>
      <div>
        {cards.map(({id, ...cardProps}) => (
          <Card  key={id} {...cardProps} />
        ))}
      </div>
    </section>
  </Container>
  // </Link>
);

SearchResults.propTypes = {
  // id: PropTypes.string,
  cards: PropTypes.array,
};

export default SearchResults;