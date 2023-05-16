import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";

import { FONT_WEIGHT } from "@shared-constants";

interface Style {
  container: ViewStyle;
  innerContainer: ViewStyle;
  forgotPasswordStyle: TextStyle;
  loaderContainer: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
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
