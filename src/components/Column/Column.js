import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    }

    static propTypes = {
        header: PropTypes.string,
    }

    addCard(title) {
        this.setState(state => (
            {
                cards: [
                    ...state.cards,
                    {
                        key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
                        title,
                    }
                ]
            }
        ));
    }
        
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>
                    <span className={styles.icon}>
                        <Icon icon={this.props.icon} />
                    </span>
                    {this.props.title}
                </h3>
                {this.state.cards.map(({ key, ...cardProps }) => (
                    <Card key={key} {...cardProps} />
                ))}
                <div>
                    <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
                </div>
            </section>
        )
    }    
}

export default Column;