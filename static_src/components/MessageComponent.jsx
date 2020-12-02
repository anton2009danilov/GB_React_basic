import React from 'react';
import PropTypes from 'prop-types';

class MessageComponent extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    };
    
    render() {
        return (
        <div>{ this.props.text }</div>
        );
    }
};

export default MessageComponent;