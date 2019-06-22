import React from "react";
import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  View,
  Text
} from "react-native";
import PropsTypes from "prop-types";

import Constants from "../../constants";

const Button = props => {
  let { disabled, onPress, buttonStyle, name, textStyle } = props;
  if (Platform.OS == "ios") {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={buttonStyle}>
          <Text style={textStyle}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableNativeFeedback
        activeOpacity={0.9}
        disabled={disabled}
        onPress={onPress}
      >
        <View style={buttonStyle}>
          <Text style={textStyle}>{name}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
};
/*
PropsTypes defined for Button 
*/
Button.propsTypes = {
  disabled: PropsTypes.bool,
  buttonStyle: PropsTypes.object.isRequired,
  textStyle: PropsTypes.object.isRequired,
  name: PropsTypes.string.isRequired,
  onPress: PropsTypes.func.isRequired,
  textColor: PropsTypes.string
};
/*
Default props from Button 
*/
Button.defaultProps = {
  disabled: false,
  buttonStyle: {},
  textStyle: {},
  name: "",
  textColor: Constants.Colors.White
};

export default Button;
