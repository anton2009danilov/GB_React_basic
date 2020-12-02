import React from 'react';
import MessageComponent from './MessageComponent';

class MessageField extends React.Component {
    state = {
        messages: [
            {
                id: 1,
                text: "Привет"
            },
            {
                id: 2,
                text: "Как дела?"
            }
        ],
    };

    addMessage = () => {
        const arr = [...this.state.messages];
        const id = arr[arr.length - 1].id + 1;

        arr.push({ id: id, text: "Всё норм" });
        this.setState({ messages: arr })
    }

    componentDidUpdate() {
        const arr = [...this.state.messages];
        const id = arr[arr.length - 1].id + 1;
        arr.push({ id: id, text: "Не приставай ко мне! Я - робот!" });

        if (this.state.messages.length % 2 === 1)
            setTimeout(() =>
                this.setState(
                    { messages: arr }
                ), 1000
            );
    }

    renderMessage = (message) => <MessageComponent text={message.text} key={message.id} />;

    render() {
        const messageElements = this.state.messages.map(
            this.renderMessage
        );

        return (
            <div>
                { messageElements}
                <button onClick={this.addMessage}>Add message</button>
            </div>
        )

    }
};

export default MessageField;