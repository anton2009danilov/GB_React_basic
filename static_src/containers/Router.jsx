import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import Chats from './Chats';
import Profile from './Profile';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Redirect to="/chat/1" />
                </Route>
                <Route
                    exact
                    path="/profile/"
                    render={() => (
                        <Profile
                            userName={this.props.userName}
                            chatId={this.props.chatId}
                            newUserName={this.props.newUserName}
                            profileMessage={this.props.profileMessage}
                            handleChange={this.props.handleChange}
                            handleClick={this.props.handleClick}
                            handleKeyUp={this.props.handleKeyUp}
                        />
                    )}
                />

                <Route
                    exact
                    path="/chat/:chatId/"
                    render={(obj) => {
                        const chatId = Number(obj.match.params.chatId);
                        const chatExist = this.props.chats[chatId];
                        return (
                            <Chats
                                chatExist={chatExist}
                                chatId={chatId}
                                // chats={this.props.chats}
                                // messages={this.props.messages}
                                userName={this.props.userName}
                                updateChats={this.props.updateChats}
                                sendMessage={this.props.sendMessage}
                            />
                        );
                    }}
                />
            </Switch>
        );
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Router);
