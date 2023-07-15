import { ViewStyle, StyleSheet, Platform, StatusBar } from "react-native";

export default () => {
  return StyleSheet.create({
    screen: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      marginVertical: 10,
    },
  });
};
