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
        newMessage: '',
    }

    textInput = React.createRef()

    robotTimer = null

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

    handleClick = (message) => {
        this.props.sendMessage(message, this.props.chatId);
    }

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            //Enter
            this.props.sendMessage(message, this.props.chatId);
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
        this.robotTimer = setTimeout(() => {
            const { messages, chatId } = this.props;

            const keys = Object.keys(messages);
            const lastMessage = Object.values(messages)[keys.length - 1];
            const userName = lastMessage.userName || 'Аноним';
            const robotText = `Не приставай ко мне, ${userName}! Я - робот!`;

            const messageId = parseInt(keys[keys.length - 1]) + 1;

            if (Object.values(messages)[keys.length - 1].userName !== 'Робот') {
                this.props.sendMessage(robotText, chatId, true);
            }
        }, 1000);
    }

    renderMessage = (message) => (
        <Message
            text={message.text}
            userName={message.userName}
            key={message.id}
        />
    )

    render() {
        const { messages } = this.props;
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
