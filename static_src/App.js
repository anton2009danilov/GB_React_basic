import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/MessageField'

let messages = ["Привет", "Как дела?"];

const addMessage = function() {
    // console.log(123);
    messages.push("Всё ОК");

    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

function App() {
    return (
        <div>
            <button id='newMessageBtn' onClick={addMessage}>Add message</button>
            <MessageField messages= {messages}></MessageField>
        </div>
    )
}

export default App;