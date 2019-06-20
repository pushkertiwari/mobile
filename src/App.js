
/*
 * @file: App.js
 * @description: App.js to render the app
 * @date: 20.06.2019
 * @author: Pushker Tiwari
 * */

import React, { Component } from 'react';
import {
    Provider
} from 'react-redux';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.disableYellowBox = true;
import { Provider } from 'react-redux';
import store from '../store';
import Nagivations from './routes/Nagivations';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    <Nagivations />
                </Provider>
            </React.Fragment>
        );
    }
}