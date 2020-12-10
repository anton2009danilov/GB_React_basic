import React from 'react';
import Message from './Message';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import PropTypes from 'prop-types';
import '../styles/style.css';

class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
    }

    state = {
        chats: {
            1: { title: 'Чат 1', messageList: [1] },
            2: { title: 'Чат 2', messageList: [2] },
            3: { title: 'Чат 3', messageList: [] },
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
        newMessage: '',
        newUserName: '',
    }

    textInput = React.createRef()

    robotTimer = null

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

    sendMessage = (message) => {
        this.setState((state) => {
            const messageId = state.messages[state.messages.length - 1].id + 1;
            return {
                messages: [
                    ...state.messages,
                    {
                        messageId: {
                            id: messageId,
                            text: message,
                            userName: this.state.newUserName,
                        },
                    },
                ],
                newMessage: '',
            };
        });
    }

    handleClick = (message) => {
        this.sendMessage(message);
    }

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            //Enter
            this.sendMessage(message);
        }
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    componentWillUnmount() {
        console.log('unmounted');
        clearTimeout(this.robotTimer);
    }

    componentDidUpdate() {
        console.log('updated');
        const arr = [...Object.values(this.state.messages)];
        const lastMessage = arr[arr.length - 1];
        const userName = lastMessage.userName || 'Аноним';
        const robotText = `Не приставай ко мне, ${userName}! Я - робот!`;

        this.robotTimer = setTimeout(
            () =>
                this.setState((state) => {
                    const messages = [...Object.values(state.messages)];
                    if (
                        messages[messages.length - 1].userName !== 'Робот'
                        // state.messages[state.messages.length - 1].userName !==
                        // 'Робот'
                    )
                        return {
                            messages: [
                                ...state.messages,
                                {
                                    id:
                                        state.messages[
                                            state.messages.length - 1
                                        ].id + 1,
                                    text: robotText,
                                    userName: 'Робот',
                                },
                            ],
                        };
                }),
            1000
        );
    }

    renderMessage = (message) => (
        <Message
            text={message.text}
            userName={message.userName}
            key={message.id}
        />
    )

    // renderMessage = (message) => console.log(message)

    render() {
        const messageElements = Object.values(this.state.messages).map(
            this.renderMessage
        );

        return (
            <div className="d-flex flex-column col-xs-12 col-sm-8">
                {messageElements}

                <div className="d-flex flex-column card p-3 input_block">
                    <TextField
                        className="input"
                        hintText="Введите имя пользователя"
                        name="newUserName"
                        value={this.state.newUserName}
                        onChange={this.handleChange}
                    />

                    <TextField
                        className="input"
                        hintText="Введите сообщение"
                        name="newMessage"
                        value={this.state.newMessage}
                        onChange={this.handleChange}
                        onKeyUp={(event) =>
                            this.handleKeyUp(event, this.state.newMessage)
                        }
                        ref={this.textInput}
                    />

                    <FloatingActionButton
                        style={{ width: 56, margin: 'auto' }}
                        onClick={() => this.handleClick(this.state.newMessage)}
                    >
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}

export default MessageField;
