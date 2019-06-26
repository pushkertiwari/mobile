"use strict";

import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import Constants from "../../constants";

class FormTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      focusColor: Constants.Colors.Primary,
      borderWidth: 1,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProp) {
    if (nextProp.focusColor !== this.state.focusColor) {
      this.setState({
        focusColor: nextProp.focusColor || Constants.Colors.Primary,
      });
    }
  }
  // Function calls the parent class onBlur function
  onBlur() {
    this.setState({
      isFocused: false,
      focusColor: Constants.Colors.gray,
      borderWidth: 1,
    });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  onFocus() {
    let colour = this.props.focusColor
      ? this.props.focusColor
      : Constants.Colors.Primary;
    this.setState({
      isFocused: true,
      focusColor: colour,
      borderWidth: 2,
    });
    if (this.props.onFocus) this.props.onFocus();
  }

  focus() {
    this.inputBox.focus();
  }

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    let {
      placeHolderText,
      placeHolderColor,
      keyboard,
      secureTextEntry,
      returnKey,
      onSubmitEditing,
      isPassword,
      multiline,
      inputStyle,
      autoFocus,
      editable,
      value,
      icon,
      maximumLength,
      onChangeText,
    } = this.props;
    return (
      <View
        style={[
          Styles.viewStyle,
          {
            borderColor: this.state.focusColor || Constants.Colors.gray,
            borderWidth: this.state.borderWidth,
          },
          this.props.style,
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {icon && (
            <Icon
              name={icon}
              size={15}
              style={{ marginHorizontal: moderateScale(10) }}
            />
          )}
          <TextInput
            ref={ref => (this.inputBox = ref || "inputbox")}
            autoFocus={autoFocus}
            underlineColorAndroid="transparent"
            style={[Styles.inputStyle, inputStyle]}
            blurOnSubmit={true}
            autoCapitalize={"none"}
            value={value}
            placeholder={placeHolderText}
            placeholderTextColor={placeHolderColor || Constants.Colors.gray}
            keyboardType={keyboard}
            secureTextEntry={secureTextEntry || isPassword}
            editable={editable}
            onChangeText={onChangeText}
            onChange={event => this.onChange(event)}
            returnKeyType={returnKey}
            autoCorrect={false}
            onSubmitEditing={onSubmitEditing}
            onFocus={() => this.onFocus()}
            onBlur={() => this.onBlur()}
            multiline={multiline}
            maxLength={maximumLength}
          />
        </View>
      </View>
    );
  }
}

export default FormTextInput;
const Styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    borderColor: Constants.Colors.gray,
    // marginHorizontal: moderateScale(25),
    // marginVertical: moderateScale(20),
    alignItems: "center",
    padding: moderateScale(5),
    backgroundColor: Constants.Colors.White,
    borderRadius: moderateScale(25),
    borderWidth: 1.5,
  },
  inputStyle: {
    ...Constants.Fonts.Regular,
    paddingLeft: 10,
    fontSize: moderateScale(20),
    height: moderateScale(50),
    flex: 1,
  },
});
