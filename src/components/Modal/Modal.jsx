import React, {Component} from 'react';
import styles from './style.module.scss'
import PropTypes from "prop-types";
import cn from 'classnames'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        const modalClasses = cn(styles.modal, {
            [styles.open]: this.props.isOpen,
            [styles.closed]: !this.props.isOpen
        })

        return (
            <div className={modalClasses}>
                <div className={styles.modal__content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;