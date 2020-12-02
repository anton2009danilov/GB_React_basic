import React from 'react';
import PropTypes from 'prop-types';
import MessageComponent from './MessageComponent';

class MessageField extends React.Component {
    state = {
        messages: ["Привет", "Как дела?"],
    };

    addMessage= () => {
        const arr = this.state.messages;
        arr.push("Всё норм");
        
        this.setState( state => ({
            messages: arr
        }))
    }

    componentDidUpdate() {
        const arr = this.state.messages;
        arr.push('Не приставай ко мне! Я - робот!')
        
        if (this.state.messages.length % 2 === 1) 
            setTimeout( () => 
                this.setState(
                    { messages: arr }
                ), 1000
            );
    }

    render() {
        const messageElements = this.state.messages.map(
            (message, ind) => <MessageComponent text={ message } key={ ind }/>
        );

        return (
            <div>
                { messageElements }
                <button onClick={this.addMessage}>Add message</button>
            </div>
        )
        
    }
};

export default MessageField;