/**
 * @author Suraj Sanwal
 */
import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import PropsTypes from "prop-types";

import Constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";

/**
 *
 * @param {disabled} props enable/disable button
 * @param {onPress} function
 */

const Button = props => {
  let {
    disabled,
    onPress,
    buttonStyle,
    buttonName,
    textStyle,
    loading,
    backgroundColor,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Styles.button,
        buttonStyle,
        {
          backgroundColor: disabled
            ? Constants.Colors.gray
            : Constants.Colors.Secondary,
        },
        backgroundColor ? { backgroundColor: backgroundColor } : null,
      ]}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator size="small" color={Constants.Colors.White} />
      ) : (
        <Text style={[Styles.buttonText, textStyle]}>{buttonName}</Text>
      )}
    </TouchableOpacity>
  );
};
/*
PropsTypes defined for Button
*/
Button.propsTypes = {
  disabled: PropsTypes.bool,
  buttonStyle: PropsTypes.object.isRequired,
  textStyle: PropsTypes.object.isRequired,
  buttonName: PropsTypes.string.isRequired,
  onPress: PropsTypes.func.isRequired,
  textColor: PropsTypes.string,
};
/*
Default props from Button
*/
Button.defaultProps = {
  disabled: false,
  buttonStyle: {},
  textStyle: {},
  buttonName: "",
  textColor: Constants.Colors.White,
};

export default Button;

const Styles = StyleSheet.create({
  button: {
    backgroundColor: Constants.Colors.Secondary,
    height: moderateScale(55),
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 5,
  },
  buttonText: {
    ...Constants.Fonts.Medium,
    fontSize: moderateScale(20),
    color: Constants.Colors.White,
  },
});
