import { ExtendedTheme } from "@react-navigation/native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";

import { FONT_WEIGHT } from "@shared-constants";

interface Style {
  container: ViewStyle;
  profileContainer: ViewStyle;
  profileDetailContainer: ViewStyle;
  cardStyle: ViewStyle;
  valueTextStyle: TextStyle;
  orTextStyle: TextStyle;
  loginTextStyle: TextStyle;
  loaderContainer: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      padding: 20,
    },
    profileContainer: {
      marginTop: 32,
      alignItems: "center",
      justifyContent: "center",
    },
    profileDetailContainer: {
      marginTop: 16,
      width: ScreenWidth * 0.9,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    cardStyle: {
      minWidth: ScreenWidth * 0.4,
      height: 75,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
      shadowRadius: 8,
      shadowOpacity: 0.3,
      shadowColor: "#757575",
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    valueTextStyle: {
      marginTop: 8,
    },
    orTextStyle: {
      position: "absolute",
      top: -10,
      left: "45%",
      backgroundColor: "#EFEEFC",
      paddingHorizontal: 10,
      borderRadius: 10,
    },
    loginTextStyle: {
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
