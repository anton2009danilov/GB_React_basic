import React from 'react';
import MessageComponent from './MessageComponent';

function MessageField(props) {
    return props.messages.map(message => <MessageComponent text={ message }/>);
};

export default MessageField;