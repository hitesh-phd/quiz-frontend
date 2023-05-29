import { ViewStyle, StyleSheet, Platform, StatusBar } from "react-native";

interface Style {
  screen: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    screen: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      marginVertical: 10,
    },
  });
};
