import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        userName: PropTypes.string,
    }

    static defaultProps = {
        chatId: 1,
        userName: 'Аноним',
    }

    render() {
        return (
            <div className="header d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <img src="../img/logo.png" alt="" className="logo" />
                        <h3>Broken Chat {this.props.chatId}</h3>
                    </div>
                    <a className="header__profile" href="/profile">
                        <h3>Профиль: {this.props.userName}</h3>
                    </a>
                </div>
            </div>
        );
    }
}
