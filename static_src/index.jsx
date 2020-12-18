import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './containers/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore, { history } from './utils/store';

ReactDOM.render(
    <Provider store={initStore()}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <Layout />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
