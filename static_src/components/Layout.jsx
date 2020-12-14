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
            4: { id: 4, title: 'Чат 4', messageList: [] },
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
            if (prevState.userName !== this.state.newUserName) {
                if (
                    (prevState.userName === 'Аноним' &&
                        !this.state.newUserName.match(/\S+/)) ||
                    !this.state.newUserName.match(/\S+/)
                ) {
                    return null;
                }

                const userName = this.state.newUserName || 'Аноним';
                // alert(`Новое имя пользователя "${userName}" сохранено`);
                return {
                    userName: userName,
                    profileMessage: `Новое имя пользователя "${userName}" сохранено`,
                };
            }

            return null;
        })

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            //Enter
            this.handleClick();
        }
    }

    updateChats = (messageId) => {
        this.setState((state) => {
            const { chats } = state;
            const { chatId } = this.props;

            return {
                chats: {
                    ...chats,
                    [chatId]: {
                        ...chats[chatId],
                        messageList: [
                            ...chats[chatId]['messageList'],
                            messageId,
                        ],
                    },
                },
            };
        });
    }

    render() {
        const chatExist = this.state.chats[this.props.chatId];
        return (
            <div>
                <Header
                    chatId={chatExist ? this.props.chatId : 'Not Found'}
                    userName={this.state.userName}
                    isProfilePage={this.props.isProfilePage}
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

                        {chatExist ? (
                            <MessageField
                                hidden={this.props.isProfilePage ? true : false}
                                chatId={this.props.chatId}
                                chats={this.state.chats}
                                userName={this.state.userName}
                                updateChats={this.updateChats}
                            />
                        ) : (
                            <div
                                className={
                                    'd-flex flex-column col-xs-12 col-sm-8 text-center'
                                }
                            >
                                <h1>Вы перешли на пустую страницу</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
