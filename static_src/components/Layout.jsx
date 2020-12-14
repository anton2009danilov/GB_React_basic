import React from 'react';
import PropTypes from 'prop-types';
import Router from './Router';

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
        messages: {
            1: {
                id: 1,
                text: 'Привет',
                userName: 'Робот',
            },
            2: {
                id: 2,
                text: 'Как дела?',
                userName: 'Робот',
            },
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
                // if (
                //     (prevState.userName === 'Аноним' &&
                //         !this.state.newUserName.match(/\S+/)) ||
                //     !this.state.newUserName.match(/\S+/)
                // ) {
                //     return null;
                // }
                let userName = this.state.newUserName;
                if (
                    !this.state.newUserName.match(/\S+/) &&
                    prevState.userName !== 'Аноним'
                ) {
                    userName = 'Аноним';
                } else if (!this.state.newUserName.match(/\S+/)) {
                    return null;
                }

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

    updateChats = (messageId, chatId) => {
        this.setState((state) => {
            const { chats } = state;

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

    sendMessage = (message, chatId, isRobot = false) => {
        this.setState((state) => {
            const { messages } = state;
            const keys = Object.keys(messages);
            const messageId = parseInt(keys[keys.length - 1]) + 1;

            this.updateChats(messageId, chatId);

            return {
                messages: {
                    ...messages,
                    [messageId]: {
                        id: messageId,
                        text: message,
                        userName: isRobot ? 'Робот' : this.state.userName,
                    },
                },
                newMessage: '',
            };
        });
    }

    render() {
        return (
            <div>
                <Router
                    chats={this.state.chats}
                    messages={this.state.messages}
                    userName={this.state.userName}
                    updateChats={this.updateChats}
                    sendMessage={this.sendMessage}
                    newUserName={this.state.newUserName}
                    profileMessage={this.state.profileMessage}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    handleKeyUp={this.handleKeyUp}
                />
            </div>
        );
    }
}
