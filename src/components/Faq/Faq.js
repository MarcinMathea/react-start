import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import initialStoreData from '../../data/dataStore.js';

class Faq extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    image: PropTypes.node,
  }
  static defaultProps ={
    title: initialStoreData.faq[0].title,
    image: initialStoreData.faq[0].image,
  }
  render() {
    console.log(initialStoreData.faq[0].title);
    return (
      <Container>
        <Hero title={this.props.title} image={this.props.image} />
        <h2>FAQ</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Container>
    );
  }
}

export default Faq;