import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const MessageComponent = (props) => <div>{ props.text }</div>;

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
