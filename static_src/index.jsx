import React from 'react';
import ReactDom from 'react-dom';

let messages = ["Привет", "Как дела?"];

const MessageComponent = (props) => <div>{ props.text }</div>
const MessageField = (props) => {
    return props.messages.map(message => <MessageComponent text={ message }/>);
}

ReactDom.render(
    <MessageField messages= {messages}></MessageField>,
    document.getElementById('root')
);
