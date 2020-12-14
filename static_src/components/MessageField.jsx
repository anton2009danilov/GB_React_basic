import React from 'react';
import Message from './Message';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import PropTypes from 'prop-types';
import '../styles/style.css';

class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        userName: PropTypes.string.isRequired,
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
        newMessage: '',
    }

    textInput = React.createRef()

    robotTimer = null

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

    sendMessage = (message) => {
        this.setState((state) => {
            const { messages, chats } = state;
            const { chatId } = this.props;
            const keys = Object.keys(messages);
            const messageId = parseInt(keys[keys.length - 1]) + 1;

            this.props.updateChats(messageId);

            return {
                messages: {
                    ...messages,
                    [messageId]: {
                        id: messageId,
                        text: message,
                        userName: this.props.userName,
                    },
                },
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
        if (!this.props.isProfilePage && this.textInput.current)
            this.textInput.current.focus();
    }

    componentWillUnmount() {
        console.log('unmounted');
        clearTimeout(this.robotTimer);
    }

    componentDidUpdate(prevProps, prevState) {
        this.robotTimer = setTimeout(
            () =>
                this.setState((state) => {
                    const { messages, chats } = state;
                    const { chatId } = this.props;

                    const keys = Object.keys(messages);
                    const lastMessage = Object.values(messages)[keys.length - 1];
                    const userName = lastMessage.userName || 'Аноним';
                    const robotText = `Не приставай ко мне, ${userName}! Я - робот!`;

                    const messageId = parseInt(keys[keys.length - 1]) + 1;

                    if (
                        Object.values(messages)[keys.length - 1].userName !==
                        'Робот'
                    ) {
                        this.props.updateChats(messageId);
                        return {
                            messages: {
                                ...messages,
                                [messageId]: {
                                    id: messageId,
                                    text: robotText,
                                    userName: 'Робот',
                                },
                            },
                        };
                    }
                }),
            1000
        );
    }

    renderMessage = (message, index) => (
        <Message
            text={message.text}
            userName={message.userName}
            key={message.id}
        />
    )

    render() {
        const { messages } = this.state;
        const { chatId, chats } = this.props;

        const messageElements = chats[chatId].messageList.map((messageId) =>
            this.renderMessage(messages[messageId])
        );

        return (
            <div className={'d-flex flex-column col-xs-12 col-sm-8 '}>
                {messageElements}

                <div className="d-flex flex-column card p-3 input_block">
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
