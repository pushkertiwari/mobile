import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

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
                    <Icon name="cloudo" size={45} />
                    <Text>Cloud Analyzing Hair Structure…</Text>
                </View>
            </Fragment>
        );
    }
}
const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: 'rgba(241, 189, 189, 1)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle:{
        fontFamily:"Montserrat-Regular",
        textAlign: 'left',
        fontSize: 13
    }
});