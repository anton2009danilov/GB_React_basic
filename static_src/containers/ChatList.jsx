import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import { addChat } from '../actions/chatActions';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui';
import ChatIcon from '@material-ui/icons/Chat';

class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        push: PropTypes.func.isRequired,
    }

    handleNavigate = (link) => {
        this.props.push(link);
    }

    renderChats = () => {
        return Object.values(this.props.chats).map((chat) => {
            return (
                // <Link key={'list' + chat.id} to={'/chat/' + chat.id}>
                <ListItem
                    key={chat.id}
                    primaryText={'Chat ' + chat.id}
                    leftIcon={<ChatIcon color="primary" />}
                    onClick={() => this.handleNavigate(`/chat/${chat.id}`)}
                />
                // </Link>
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

const mapStateToProps = ({ router, chatReducer }) => ({
    router: router,
    chats: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
