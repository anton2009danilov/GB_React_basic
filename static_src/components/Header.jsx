import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        userName: PropTypes.string,
        isProfilePage: PropTypes.bool,
    }

    static defaultProps = {
        chatId: 1,
        userName: 'Аноним',
    }

    render() {
        return (
            <div className="header d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center ">
                        <Link key={'header_link'} to={'/chat/1'}>
                            <img
                                src="../img/logo.png"
                                alt=""
                                className="logo"
                            />
                        </Link>
                        <h3>
                            Broken Chat
                            {this.props.isProfilePage
                                ? ' Profile'
                                : ' ' + this.props.chatId}
                        </h3>
                    </div>

                    <Link
                        key={'header' + this.props.userName}
                        to={'/profile/'}
                        className="header__profile"
                    >
                        <h3>Профиль: {this.props.userName}</h3>
                    </Link>
                </div>
            </div>
        );
    }
}
