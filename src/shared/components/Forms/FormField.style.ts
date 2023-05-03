import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

import { FONT_WEIGHT } from "@shared-constants";

interface Style {
  inputContainer: ViewStyle;
  inputOutline: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    inputContainer: {
      backgroundColor: colors.white,
      marginBottom: 10,
      fontSize: 16,
      fontWeight: FONT_WEIGHT.Medium,
      paddingHorizontal: 5,
      paddingVertical: 5,
    },
    inputOutline: {
      borderRadius: 25,
      borderWidth: 1,
    },
  });
};
