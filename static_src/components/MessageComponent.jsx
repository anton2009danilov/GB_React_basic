import React from 'react';
import PropTypes from 'prop-types';

class MessageComponent extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="border-top mb-2">
                <h4>{this.props.userName ? this.props.userName : "Аноним"}</h4>
                <p>{this.props.text}</p>
            </div>
        );
    }
};

export default MessageComponent;