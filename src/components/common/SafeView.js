import React from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const config = {
  enableOnAndroid: true,
  enableAutomaticScroll: true,
};

const SafeArea = props => (
  <SafeAreaView
    style={{ flex: 1, backgroundColor: props.color || "transparent" }}
  >
    <StatusBar
      backgroundColor={props.color || "transparent"}
      barStyle="light-content"
      hidden={props.hidden}
    />
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      enableOnAndroid
      enableAutomaticScroll
      keyboardShouldPersistTap="handled"
    >
      {props.children}
    </KeyboardAwareScrollView>
  </SafeAreaView>
);

export default SafeArea;
