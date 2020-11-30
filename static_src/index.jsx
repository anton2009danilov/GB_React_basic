import React from 'react';
import ReactDom from 'react-dom';

let messages = ["Привет", "Как дела?"];

const MessageComponent = (props) => <div>{ props.text }</div>;
const MessageField = (props) => {
    return props.messages.map(message => <MessageComponent text={ message }/>);
};
const addMessage = function() {
    // console.log(123);
    messages.push("Всё ОК");

    renderApp()
}

function renderApp() {
    ReactDom.render(
        <div>
            <button id='newMessageBtn' onClick={addMessage}>Add message</button>
            <MessageField messages= {messages}></MessageField>
        </div>,
        document.getElementById('root')
    );
}

renderApp();
