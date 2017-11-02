import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from '../components/Layout.jsx';
import store, { history } from '../data/store';

export default class Root extends Component {
    render() {
        return ( <
            MuiThemeProvider >
            <
            Provider store = { store } >
            <
            ConnectedRouter history = { history } >
            <
            Layout / >
            <
            /ConnectedRouter> <
            /Provider> <
            /MuiThemeProvider>
        );
    }
}