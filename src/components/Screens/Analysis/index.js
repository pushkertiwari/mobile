import React, { Component, Fragment } from "react";
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Alert,
    StatusBar,
    Dimensions,
    Animated,
    Image
} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

export default class Analysis extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null
    };


    render() {
        return (
            <Fragment>
                <View style={{ flex: 1, backgroundColor: "#F1BDBD" }}>
                    {/* header view  */}
                    <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', marginEnd: 10, marginStart: 10, marginBottom: 10 }}>
                        <Text
                            style={{
                                fontFamily: "Montserrat-Regular",
                                fontSize: 21,
                                color: "#7B5151",
                                margin: 5
                            }}
                        >
                            {"MY"}
                            <Text style={{
                                fontFamily: "Montserrat-bold",
                                fontSize: 21,
                                color: "#7B5151",
                                margin: 5
                            }}>{"AVANA"}</Text>
                            <Text
                                style={{
                                    fontSize: 6,
                                    // height: 25,
                                    top: 50,
                                    height: '100%',
                                    width: '100%',
                                    marginTop: 10,
                                    paddingRight: 5,
                                    alignItems: 'flex-end',
                                    position: 'absolute'
                                }}
                            >
                                {"TM"}
                            </Text>
                        </Text>
                        <Icon name="bar-graph" size={45} style={{ transform: [{ rotate: '90deg' }] }} />
                    </View>
                    <View style={{ flex: 0.2, justifyContent: 'center', flexDirection: 'row', alignItems: 'center',marginTop:50 }}>
                        <Image
                            source={{ uri: 'https://aboutreact.com/wp-content/uploads/2018/07/logo.png', }}
                            //borderRadius style will help us make the Round Shape Image
                            style={{ 
                                width: 180, height: 180, borderRadius: 200 / 2,
                                overflow: "hidden",
                                borderWidth: 3,
                                borderColor: "#ccc" }}
                        />
                    </View>
                </View>
            </Fragment>
        );
    }
}
const styles = StyleSheet.create({
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderWidth: 6,
        backgroundColor: '#fff'
    }
})  