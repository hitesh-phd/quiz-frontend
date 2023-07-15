import { FONT_WEIGHT } from "@shared-constants";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";

export default (theme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      padding: 10,
    },
    title: {
      fontWeight: FONT_WEIGHT.Bold,
      paddingLeft: 20,
    },
    icon: {
      color: colors.black,
      padding: 10,
      position: "absolute",
      left: 0,
      top: 0,
      height: 50,
      // width: ScreenWidth * 0.2,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
    },
  });
};
