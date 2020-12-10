import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    }

    static defaultProps = {
        chatId: 1,
    }

    render() {
        return (
            <div className="header d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <img src="../img/logo.png" alt="" className="logo" />
                    <h3>Broken Chat {this.props.chatId}</h3>
                </div>
            </div>
        );
    }
}
