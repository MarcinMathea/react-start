import React from 'react';
import styles from './Card.scss';

class Card extends React.Component {
    state = {
        card: this.props.card || [],
      }
    render () {
        return (
            <div className={styles.component}></div>
        )
    }
}

export default Card;