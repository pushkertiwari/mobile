import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  Animated
} from "react-native";
import { moderateScale } from '../../../helpers/ResponsiveFonts'

// import Header from "../../../components/common/Header";

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.openCamera = this.openCamera.bind(this);
  }
  static navigationOptions = {
    header: null
  };
  openCamera(){
    this.props.navigation.navigate('Camera');
  }
  render() {
    return (
      <Fragment>
        <View style={{ flex: 1, backgroundColor: "#F1BDBD" }}>
          <View style={styles.maskOutter}>
          <Image style={{
            bottom:moderateScale(350),
            left:moderateScale(60)
          }} source={require('../../../assets/images/EllipseImage.png')} />
          </View>
          <View style={{flex:0.2,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Image style={{resizeMode: "contain",width:'40%',marginLeft:moderateScale(30)}} source={require('../../../assets/images/mainIcon.png')} />
          </View>
          <View style={{flex:0.1}}></View>
          <View style={{ flex: 0.6 }}>
            <View style={{ marginLeft: 60, marginRight: 25 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  fontSize: 21,
                  textAlign: "justify",
                  fontWeight:'700',
                  color: "#7B5151"
                }}
              >
                So, This is how it works!
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
               1. Take a snapshot of yourself with your hair covering majority of the frame.
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
                2. Press upload whenever you are satisfied with the image you have taken.
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
                3. That's it!
              </Text>
            </View>
            <View style={{}}>
            <View style={styles.btnSignInContainer}>
                <TouchableOpacity style={styles.btnSignIn} onPress={this.openCamera}>
                  <Text style={styles.btnSignInText}>Ok, Got it!</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={{ marginLeft: 60, marginRight: 25 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",
                  fontSize: 11,
                  textAlign: "justify",
                  color: "#7B5151"
                }}
              >
                Side note: We don't sell nor distribute your info
                {"\n"}or data to other companies.
              </Text>
              </View>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles =  StyleSheet.create({
    btnSignInContainer: {
        alignItems: 'center',
        marginTop: 0
      },
      btnSignIn: {
        width: 280,
        marginBottom: 10.1,
        shadowColor: '#7B5151',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: .8,
        backgroundColor: '#7B5151',
        height: 52.94,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnSignInText: {
        color: 'white',
        fontSize: 18
      },
      maskOutter: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        marginTop: moderateScale(10),
        paddingRight: moderateScale(5),
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      }
})