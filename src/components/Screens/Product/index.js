import React, { Component, Fragment } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { moderateScale } from "../../../helpers/ResponsiveFonts";

export default class Product extends Component {
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
          <View style={{ flex: 0.5 }}>
            <View style={{ marginLeft: 30, marginRight: 25 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",
                  fontSize: 21,
                  textAlign: "justify",
                  color: "#7B5151",
                }}
              >
                Check these products out!
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
            <View
              style={{
                flex: 0.2,
                flexDirection: "row",
                marginLeft: 30,
                marginRight: 25,
                justifyContent: "space-around",
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
          </View>
          <View style={{ flex: 0.2 }}>
            <View style={styles.btnSignInContainer}>
              <TouchableOpacity style={styles.btnSignIn}>
                <Text style={styles.btnSignInText}>Contact us</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnSignInContainer}>
              <TouchableOpacity style={styles.btnSignIn}>
                <Text style={styles.btnSignInText}>Go back</Text>
              </TouchableOpacity>
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
    width: 65,
    height: 65,
    borderRadius: 15,
    borderWidth: 2,
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
  },
});
