import React from 'react';
import PropTypes from 'prop-types';
import Router from './Router';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { sendMessage } from '../actions/messageActions';
import { updateChats } from '../actions/chatActions';

class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
    }

    static defaultProps = {
        chatId: 1,
    }

    state = {
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

    sendMessage = (message, chatId, isRobot = false) => {
        const { messages } = this.state;
        const keys = Object.keys(messages);
        const messageId = parseInt(keys[keys.length - 1]) + 1;
        const userName = isRobot ? 'Робот' : this.state.userName;

        this.setState({
            messages: {
                ...messages,
                [messageId]: {
                    id: messageId,
                    text: message,
                    userName: userName,
                },
            },
            newMessage: '',
        });
        this.props.updateChats(messageId, chatId);
        // this.props.sendMessage(messageId, message, userName, chatId);
    }

    render() {
        return (
            <div>
                <Router
                    // chats={this.state.chats}
                    messages={this.state.messages}
                    userName={this.state.userName}
                    updateChats={this.props.updateChats}
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

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ sendMessage, updateChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
