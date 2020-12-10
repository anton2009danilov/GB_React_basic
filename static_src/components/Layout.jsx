import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import MessageField from './MessageField';
import ChatList from './ChatList';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    }

    static defaultProps = {
        chatId: 1,
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <ChatList />
                        <MessageField />
                    </div>
                </div>
            </div>
        );
    }
}
