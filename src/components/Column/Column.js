import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        headerText: PropTypes.node,
    }

    render() {
        return (
            <section className={styles.component}>
    <h3 className={styles.title}>{props.headerText}</h3>
            </section>
        )
    }
}

export default Column;