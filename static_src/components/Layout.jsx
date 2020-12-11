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

    state = {
        chats: {
            1: { id: 1, title: 'Чат 1', messageList: [1] },
            2: { id: 2, title: 'Чат 2', messageList: [2] },
            3: { id: 3, title: 'Чат 3', messageList: [] },
        },
    }

    render() {
        return (
            <div>
                <Header chatId={this.props.chatId} />
                <div className="container">
                    <div className="row">
                        <ChatList chats={this.state.chats} />
                        <MessageField
                            chatId={this.props.chatId}
                            chats={this.state.chats}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
