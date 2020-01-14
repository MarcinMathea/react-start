/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
//import { settings } from '../../data/dataStore';

class Column extends React.Component {
  static propTypes = {
    header: PropTypes.string,
    cards: PropTypes.array,
  }

  render() {
    const { title, icon, cards } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon icon={icon} />
          </span>
          {title}
        </h3>
        
        {cards.map(cardsData => (
          <Card key={cardsData.id} {...cardsData} />
        ))}
        {/*
          <div>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
          </div>
          */}
      </section>
    );
  }
}

export default Column;