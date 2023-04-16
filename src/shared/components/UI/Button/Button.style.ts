import { ExtendedTheme } from "@react-navigation/native";
import { FONT_WEIGHT } from "@shared-constants";
import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";

interface Style {
  buttonOuterContainer: ViewStyle;
  buttonInnerContainer: ViewStyle;
  buttonText: TextStyle;
  pressed: ViewStyle;
  image: ImageStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    buttonOuterContainer: {
      borderRadius: 28,
      margin: 4,
      marginVertical: 8,
      overflow: "hidden",
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonInnerContainer: {
      backgroundColor: colors.primary,
      padding: 16,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: colors.white,
      fontSize: 18,
      fontWeight: FONT_WEIGHT.Bold,
    },
    pressed: {
      opacity: 0.75,
    },
    image: {
      width: 24,
      height: 24,
      marginRight: 12,
    },
  });
};
