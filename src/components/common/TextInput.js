"use strict";

import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import Constants from "../../constants";

class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      focusColor: Constants.Colors.Primary,
      borderWidth: 1
    };
  }

  // Function calls the parent class onBlur function
  onBlur() {
    this.setState({
      isFocused: false,
      focusColor: Constants.Colors.Secondary,
      borderWidth: 1
    });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  onFocus() {
    let colour = this.props.focusColor
      ? this.props.focusColor
      : Constants.Colors.Secondary;
    this.setState({
      isFocused: true,
      focusColor: colour,
      borderWidth: 2
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
      secureText,
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
      onChangeText
    } = this.props;
    return (
      <View
        style={[
          Styles.viewStyle,
          {
            borderColor: this.state.focusColor,
            borderWidth: this.state.borderWidth
          },
          this.props.style
        ]}
      >
        <View style={{flexDirection:"row", alignItems:'center'}}>
          {icon && <Icon name={icon} size={15} style={{marginHorizontal:moderateScale(10)}} />}
          <TextInput
            ref={ref => (this.inputBox = ref || "inputbox")}
            autoFocus={autoFocus}
            underlineColorAndroid="transparent"
            style={[Styles.inputStyle, inputStyle]}
            blurOnSubmit={true}
            autoCapitalize={"none"}
            value={value}
            placeholder={placeHolderText}
            placeholderTextColor={placeHolderColor || Constants.Colors.Primary}
            keyboardType={keyboard}
            secureTextEntry={secureText || isPassword}
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

export default MyTextInput;
const Styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    borderColor: Constants.Colors.placehoder,
    borderRadius: moderateScale(25),
    marginHorizontal: moderateScale(25),
    marginVertical:moderateScale(20),
    alignItems: "center",
    backgroundColor:Constants.Colors.White,
  },
  inputStyle: {
    color: Constants.Colors.Primary,
    ...Constants.Fonts.Regular,
    fontSize: moderateScale(16),
    alignItems: "center",
    borderLeftWidth: 1,
    marginVertical: moderateScale(2),
    paddingHorizontal: moderateScale(5),
    flex:1
  }
});
