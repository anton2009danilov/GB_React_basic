import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Layout from './Layout';

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Redirect to="/chat/1" />
                </Route>
                <Route
                    exact
                    path="/profile/"
                    render={() => <Layout isProfilePage={true} />}
                />
                <Route
                    exact
                    path="/chat/:chatId/"
                    render={(obj) => (
                        <Layout chatId={Number(obj.match.params.chatId)} />
                    )}
                />
            </Switch>
        );
    }
}
