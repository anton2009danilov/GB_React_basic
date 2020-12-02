import React from 'react';
import MessageComponent from './MessageComponent';

class MessageField extends React.Component {
    state = {
        messages: ["Привет", "Как дела?"],
    };

    addMessage = () => {
        const arr = [...this.state.messages];
        // const arr = this.state.messages;
        arr.push("Всё норм");
        console.log(this.state.messages)

        this.setState({ messages: arr })
    }

    componentDidUpdate() {
        const arr = [...this.state.messages];
        arr.push('Не приставай ко мне! Я - робот!')

        if (this.state.messages.length % 2 === 1)
            setTimeout(() =>
                this.setState(
                    { messages: arr }
                ), 1000
            );
    }

    renderMessage = (message, ind) => <MessageComponent text={message} key={ind} />;

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