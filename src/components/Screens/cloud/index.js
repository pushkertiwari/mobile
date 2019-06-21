import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, StatusBar } from 'react-native';

export default class Cloud extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Fragment>
                <View style={styles.mainWrapper}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                    <View style={{ height: 50, backgroundColor: 'skyblue' }} />
                    <View style={{ height: 100, backgroundColor: 'steelblue' }} />
                </View>
            </Fragment>
        );
    }
}
const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: 'rgba(241, 189, 189, 1)',
    }
});