import React from 'react';
import { List, ListItem } from 'material-ui';
import ChatIcon from '@material-ui/icons/Chat';

// import Chat from "@material-ui/icons/Chat";

export default function ChatList() {
    return (
        <div className="col-sm-4 p-0">
            <List
                style={{ backgroundColor: 'lavender' }}
                className="d-flex flex-sm-row flex-wrap flex-lg-column mb-2"
            >
                <ListItem
                    primaryText="Chat 1"
                    leftIcon={<ChatIcon color="primary" />}
                />
                <ListItem
                    primaryText="Chat 2"
                    leftIcon={<ChatIcon color="primary" />}
                />
                <ListItem
                    primaryText="Chat 3"
                    leftIcon={<ChatIcon color="primary" />}
                />
            </List>
        </div>
    );
}
