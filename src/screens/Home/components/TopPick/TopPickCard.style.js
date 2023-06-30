import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";

import { FONT_WEIGHT } from "@shared-constants";

export default (theme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      alignSelf: "center",
      marginVertical: 30,
      width: ScreenWidth * 0.9,
    },
    imageBackground: {
      width: ScreenWidth * 0.9,
      height: ScreenWidth / 2.5,
      justifyContent: "center",
      padding: 10,
      borderRadius: 25,
      overflow: "hidden",
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    headerContainer: {
      padding: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
  });
};
