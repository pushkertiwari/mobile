import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StatusBar,
  Dimensions,
  Animated,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { moderateScale } from "../../../helpers/ResponsiveFonts";

export default class Analysis extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    const imageData = navigation.getParam("image");
    return (
      <Fragment>
        <View style={{ flex: 1, backgroundColor: "#F1BDBD" }}>
          <View
            style={{
              flex: 0.1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                resizeMode: "contain",
                width: "35%",
                marginLeft: moderateScale(10),
              }}
              source={require("../../../assets/images/mainIcon.png")}
            />
            <Image
              style={{ marginRight: moderateScale(20) }}
              source={require("../../../assets/images/barIcon.png")}
            />
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Image
              source={{ uri: imageData }}
              style={{
                width: 150,
                height: 150,
                borderRadius: 150 / 2,
                overflow: "hidden",
                borderWidth: 7,
                borderColor: "white",
              }}
            />
          </View>
          <View
            style={{
              flex: 0.2,
              flexDirection: "row",
              marginLeft: 30,
              marginRight: 25,
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <View>
              <View style={styles.SquareShapeView} />
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  fontSize: 19,
                  textAlign: "center",
                }}
              >
                Kinky {"\n"} 5%
              </Text>
            </View>
            <View>
              <View style={styles.SquareShapeView} />
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  fontSize: 19,
                  textAlign: "center",
                }}
              >
                Coily {"\n"} 5%
              </Text>
            </View>
            <View>
              <View style={styles.SquareShapeView} />
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  fontSize: 19,
                  textAlign: "center",
                }}
              >
                Curly {"\n"} 5%
              </Text>
            </View>
            <View>
              <View style={styles.SquareShapeView} />
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  fontSize: 19,
                  textAlign: "center",
                }}
              >
                Wavy {"\n"} 5%
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.1 }}>
            <View style={{ marginLeft: 30, marginRight: 25 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",
                  fontSize: 21,
                  textAlign: "justify",
                  color: "#7B5151",
                }}
              >
                Your Hair Looks like it is…
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",
                  fontSize: 14,
                  textAlign: "justify",
                  paddingVertical: 10,
                  color: "#7B5151",
                }}
              >
                You have big, loose curls and spirals similar in circumference
                to a piece of thick, sidewalk chalk. Your curls tend to be
                shiny, with a well-defined S-shape.{"\n"}
                {"\n"} Use an anti-humectant (humidity blocking) styling cream
                or styling milk for less frizz but more definition.
              </Text>
            </View>
            <View style={{}}>
              <View style={styles.btnSignInContainer}>
                <TouchableOpacity
                  style={{
                    width: 280,
                    marginVertical: 20,
                    borderColor: "#7B5151",
                    borderWidth: 2,
                    elevation: 3,
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.8,
                    height: moderateScale(50.94),
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.btnSignInText}>Improve My Results</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSignIn}>
                  <Text style={styles.btnSignInText}>Proceed to products</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    backgroundColor: "#fff",
  },
  btnSignInContainer: {
    alignItems: "center",
    marginTop: 0,
  },
  btnSignIn: {
    width: moderateScale(280),
    marginBottom: 10.1,
    shadowColor: "#7B5151",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    backgroundColor: "#7B5151",
    height: moderateScale(50.94),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSignInText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-bold",
  },
  SquareShapeView: {
    width: 80,
    height: 75,
    borderRadius: 15,
    borderWidth: 2,
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
  },
});
