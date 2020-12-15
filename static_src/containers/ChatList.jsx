import React from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { addChat } from '../actions/chatActions';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui';
import ChatIcon from '@material-ui/icons/Chat';

class ChatList extends React.Component {
    renderChats = () => {
        return Object.values(this.props.chats).map((chat) => {
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
    }

    render() {
        return (
            <div className="col-sm-4 p-0">
                <List
                    style={{ backgroundColor: 'lavender' }}
                    className="d-flex flex-sm-row flex-wrap flex-lg-column mb-2"
                >
                    {this.renderChats()}
                </List>
            </div>
        );
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
