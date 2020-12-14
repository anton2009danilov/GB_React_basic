import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Header from './Header';
import ChatList from './ChatList';
import MessageField from './MessageField';

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Redirect to="/chat/1" />
                </Route>
                <Route exact path="/profile/" render={() => 'profile'} />
                <Route
                    exact
                    path="/chat/:chatId/"
                    render={
                        (obj) => {
                            const chatId = Number(obj.match.params.chatId);
                            const chatExist = this.props.chats[chatId];
                            return (
                                <>
                                    <Header
                                        chatId={
                                            chatExist ? chatId : 'Not Found'
                                            // ? this.props.chatId
                                        }
                                        userName={this.props.userName}
                                    />
                                    <div className="container">
                                        <div className="row">
                                            <ChatList
                                                chats={this.props.chats}
                                            />
                                            {chatExist ? (
                                                <MessageField
                                                    // hidden={
                                                    //     this.props.isProfilePage
                                                    //         ? true
                                                    //         : false
                                                    // }
                                                    // chatId={this.props.chatId}
                                                    chatId={chatId}
                                                    chats={this.props.chats}
                                                    userName={
                                                        this.props.userName
                                                    }
                                                    updateChats={
                                                        this.props.updateChats
                                                    }
                                                />
                                            ) : (
                                                <div
                                                    className={
                                                        'd-flex flex-column col-xs-12 col-sm-8 text-center'
                                                    }
                                                >
                                                    <h1>
                                                        Вы перешли на пустую
                                                        страницу
                                                    </h1>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            );
                        }
                        // <Layout chatId={Number(obj.match.params.chatId)} />
                    }
                />
            </Switch>
        );
    }
}
