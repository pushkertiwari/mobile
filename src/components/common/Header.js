import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import {
  View,
  Text,
} from "react-native";
/** 
@param props object 
@param title  String Title of header
@param subText String
@param drawer Boolean Set visibility of drawer icon
 */
const Header = props => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      height: 40,
      shadowColor: "#000",
      shadowOpacity: 1,
      elevation: 5,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 0 }
      //   borderWidth:1
    }}
  >
    <View />
    <View style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontFamily: "Montserrat-bold",
          fontSize: 19,
          color: "#7B5151",
          margin: 5
        }}
      >
        {props.title.toUpperCase()}
      </Text>
      <Text
        style={{
          fontSize: 10,
          // borderWidth: 1,
          // borderRadius: 100,
          height: 18,
          width: 18,
          textAlign: "center",
          textAlignVertical: "center"
        }}
      >
        {props.subText}
      </Text>
    </View>
    <View />
  </View>
);

export default Header;