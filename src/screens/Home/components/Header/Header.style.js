import { ViewStyle, StyleSheet, TextStyle } from "react-native";

import { FONT_WEIGHT } from "@shared-constants";

export default (theme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    innerContainer: {
      justifyContent: "center",
      alignItems: "center",
    },

    forgotPasswordStyle: {
      marginTop: 20,
      fontWeight: FONT_WEIGHT.Bold,
    },
    loaderContainer: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      zIndex: 1,
    },
  });
};
