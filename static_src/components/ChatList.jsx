import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui';
import ChatIcon from '@material-ui/icons/Chat';

export default class ChatList extends React.Component {
    render() {
        const renderChats = Object.values(this.props.chats).map((chat) => {
            return (
                <Link key={'list' + chat.id} to={'/chat/' + chat.id}>
                    <ListItem
                        key={chat.id}
                        primaryText={'Chat ' + chat.id}
                        leftIcon={<ChatIcon color="primary" />}
                    />
                </Link>
            );
        });

        return (
            <div className="col-sm-4 p-0">
                <List
                    style={{ backgroundColor: 'lavender' }}
                    className="d-flex flex-sm-row flex-wrap flex-lg-column mb-2"
                >
                    {renderChats}
                </List>
            </div>
        );
    }
}
