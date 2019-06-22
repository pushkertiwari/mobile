import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  Animated
} from "react-native";
import TextInput from "../components/common/TextInput";
import Header from "../components/common/Header";
import Button from "../components/common/Button";

const PacMan = () => {
  return (
    <View
      style={{
        width: 200,
        height: 200,
        borderTopWidth: 5,
        borderTopColor: "red",
        borderLeftColor: "red",
        borderLeftWidth: 5,
        borderRightColor: "transparent",
        borderRightWidth: 5,
        borderBottomColor: "red",
        borderBottomWidth: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderRadius: 100
      }}
    />
  );
};

class Home extends Component {
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
          <Header title={"MyAvana"} subText={"TM"} />
          <View style={{ flex: 1 }}>
            <View style={{ marginLeft: 60, marginRight: 25 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  fontSize: 20,
                  textAlign: "justify",
                  color: "#7B5151"
                }}
              >
                We're So Happy You're Here!
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",
                  fontSize: 14,
                  textAlign: "justify",
                  paddingVertical: 10,
                  color: "#7B5151"
                }}
              >
                If you are seeing this screen, Congratulations! You have been
                chosen to try out our brand new product.
              </Text>
              <Text
                style={{
                  textAlign: "justify",
                  fontFamily: "Montserrat-Regular",
                  fontSize: 14,
                  paddingVertical: 10,
                  color: "#7B5151"
                }}
              >
                Please enter your access code to proceed with the free demo
                version of this app.
              </Text>
            </View>
            <View style={{}}>
              <TextInput  placeHolderText={"Email"}/>
              <TextInput placeHolderText={"Phone (Optional)"}/>
              <TextInput placeHolderText={"Access Code"}/>
              <Button name={"Continue"} />
            </View>
          </View>
        </View>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
