import React from 'react';
import MessageComponent from './MessageComponent';

function MessageField(props) {
    return props.messages.map( (message, ind) => <MessageComponent text={ message } key={ ind }/>);
};

export default MessageField;