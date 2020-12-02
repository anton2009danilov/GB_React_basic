import React from 'react';
import MessageField from './components/MessageField'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: ["Привет", "Как дела?"]};
        
        this.addMessage = this.addMessage.bind(this);
      }

    addMessage() {
        const arr = this.state.messages;
        arr.push("Всё норм");
        
        this.setState( state => ({
            messages: arr
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.addMessage}>Add message</button>
                <MessageField messages= {this.state.messages}></MessageField>
            </div>
        )
    }
}

export default App;