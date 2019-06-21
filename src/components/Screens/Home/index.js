import React, { Component,Fragment } from 'react';
import { StyleSheet, View, Text, ActivityIndicator,StatusBar } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null
    }

    render(){
        console.log(this.props)
        return(
            <Fragment>
                <View >
                </View>
            </Fragment>
        );  
    }
}
const styles = StyleSheet.create({
    mainWrapper:{
        
    }
});