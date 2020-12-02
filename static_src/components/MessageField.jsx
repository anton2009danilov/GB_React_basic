import React from 'react';
import MessageComponent from './MessageComponent';

class MessageField extends React.Component {
    state = {
        messages: [
            {
                id: 1,
                text: "Привет",
                userName: "Donald"
            },
            {
                id: 2,
                text: "Как дела?",
                userName: "Vova"
            }
        ],
        newMessage: '',
        newUserName: ''
    };

    handleWriteMessage = (e) => this.setState({ newMessage: e.target.value });
    handleWriteName = (e) => this.setState({ newUserName: e.target.value })

    addMessage = () => {
        const arr = [...this.state.messages];
        const id = arr[arr.length - 1].id + 1;

        arr.push({ id: id, text: this.state.newMessage, userName: this.state.newUserName });
        this.setState({ messages: arr });
    }

    componentDidUpdate() {
        const arr = [...this.state.messages];
        const lastMessage = arr[arr.length - 1];
        const newId = lastMessage.id + 1.
        const userName = lastMessage.userName ? lastMessage.userName : "Аноним";

        arr.push({
            id: newId,
            text: `Не приставай ко мне, ${userName}! Я - робот!`,
            userName: "Робот"
        });

        if (this.state.messages.length % 2 === 1)
            setTimeout(() =>
                this.setState(
                    { messages: arr }
                ), 1000
            );
    }

    renderMessage = (message) =>
        <MessageComponent text={message.text} userName={message.userName} key={message.id} />;


    render() {
        const messageElements = this.state.messages.map(
            this.renderMessage
        );

        return (
            <div className='container'>
                { messageElements}

                <div className="d-flex flex-column card p-3">
                    <label htmlFor='newText'>Введите имя пользователя</label>
                    <input type="text" id='newText' value={this.state.value} onChange={this.handleWriteName} />

                    <label htmlFor='name'>Введите сообщение</label>
                    <input type="text" id='name' value={this.state.value} onChange={this.handleWriteMessage} />

                    <button className='mt-2' onClick={this.addMessage}>Отправить</button>
                </div>
            </div>
        )

    }
};

export default MessageField;