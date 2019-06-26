import { connect } from "react-redux";
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
  ImageBackground
} from "react-native";
import TextInput from "../components/common/TextInput";
import Header from "../components/common/Header";
import Button from "../components/common/Button";
import { moderateScale } from "../helpers/ResponsiveFonts";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class Home extends Component {
  constructor(props) {
    super(props);
    this.howThisWorks = this.howThisWorks.bind(this);
  }
  static navigationOptions = {
    header: null
  };
  howThisWorks() {
    this.props.navigation.navigate("Work");
  }

  render() {
    return (
      <Fragment>
        <View style={{ flex: 1, backgroundColor: "#F1BDBD" }}>
          <Header title={"My"} secondTitle={"AVANA"} subText={"TM"} />
          <View
            style={{
              position: "absolute",
              zIndex: 99,
              top: 0,
              width: "119%",
              height: "72%",
              left: 0
            }}
          >
            <ImageBackground
              source={require("../assets/images/EllipseImage.png")}
              style={{ width: "100%", height: "75%" }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              bottom: moderateScale(60)
            }}
          >
            <KeyboardAwareScrollView
              // style={{height:Dimensions.get("screen").height}}
              contentContainerStyle={{ flex: 1 }}
              enableOnAndroid
              enableAutomaticScroll
              keyboardShouldPersistTap="handled"
            >
              <View style={{flex:1}}>
                <View style={{flex:0.15}}/>
                <View
                  style={{
                    marginLeft: 60,
                    marginRight: 25,
                    flex: 0.4,
                  }}
                >
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
                    If you are seeing this screen, Congratulations! You have
                    been chosen to try out our brand new product.
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
                <View
                  style={{
                    padding: moderateScale(20),
                    justifyContent: "space-between",
                    alignItems: "center",
                    flex: 0.4
                  }}
                >
                  <TextInput
                    placeHolderText={"Email"}
                    onChangeText={email => this.setState({ email })}
                  />
                  <TextInput
                    placeHolderText={"Phone (Optional)"}
                    onChangeText={phone => this.setState({ phone })}
                  />
                  <TextInput
                    placeHolderText={"Access Code"}
                    onChangeText={accessCode => this.setState({ accessCode })}
                  />
                  <Button
                    buttonName={"Continue"}
                    buttonStyle={{ borderRadius: moderateScale(20) }}
                    onPress={this.howThisWorks}
                  />
                </View>
              </View>
            </KeyboardAwareScrollView>
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
