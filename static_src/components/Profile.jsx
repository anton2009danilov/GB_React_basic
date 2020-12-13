import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

export default function Profile(props) {
    return (
        <div className="d-flex flex-column col-xs-12 col-sm-8">
            <div className="d-flex flex-column card p-3 input_block">
                <TextField
                    className="input"
                    hintText="Введите имя пользователя"
                    name="newUserName"
                    value={props.newUserName}
                    onChange={props.handleChange}
                    // onKeyUp={(event) =>
                    //     this.handleKeyUp(event, props.newMessage)
                    // }
                />
                <FloatingActionButton
                    style={{ width: 56, margin: 'auto' }}
                    onClick={() => props.handleClick(props.newUserName)}
                >
                    <SendIcon />
                </FloatingActionButton>
            </div>
            <div className="profile__message">{props.profileMessage}</div>
        </div>
    );
}
