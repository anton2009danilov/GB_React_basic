import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import MessageField from './MessageField';
import ChatList from './ChatList';
import Profile from './Profile';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        isProfilePage: PropTypes.bool,
    }

    static defaultProps = {
        chatId: 1,
        isProfilePage: false,
    }

    state = {
        chats: {
            1: { id: 1, title: 'Чат 1', messageList: [1] },
            2: { id: 2, title: 'Чат 2', messageList: [2] },
            3: { id: 3, title: 'Чат 3', messageList: [] },
        },
        userName: 'Аноним',
        profileMessage: '',
        newUserName: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick = () =>
        this.setState((prevState) => {
            if (prevState.userName !== this.state.newUserName)
                return {
                    userName: this.state.newUserName,
                    profileMessage: `Новое имя пользователя "${this.state.newUserName}" сохранено`,
                };

            return null;
        })

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            //Enter
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <Header
                    chatId={this.props.chatId}
                    userName={this.state.userName}
                />
                <div className="container">
                    <div className="row">
                        <ChatList chats={this.state.chats} />
                        {this.props.isProfilePage && (
                            <Profile
                                userName={this.state.userName}
                                newUserName={this.state.newUserName}
                                profileMessage={this.state.profileMessage}
                                handleChange={this.handleChange}
                                handleClick={this.handleClick}
                                handleKeyUp={this.handleKeyUp}
                            />
                        )}

                        <MessageField
                            hidden={this.props.isProfilePage ? true : false}
                            chatId={this.props.chatId}
                            chats={this.state.chats}
                            userName={this.state.userName}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
