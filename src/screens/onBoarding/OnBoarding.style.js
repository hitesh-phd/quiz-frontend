import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";

import { FONT_WEIGHT } from "@shared-constants";

export default (theme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.secondaryBackground,
      padding: 15,
    },
    imageContainer: {
      flex: 4,
      justifyContent: "center",
      alignItems: "center",
    },

    title: { marginTop: 20, textAlign: "center", fontWeight: FONT_WEIGHT.Bold },
    subTitle: {
      marginVertical: 10,
      fontWeight: FONT_WEIGHT.Bold,
      textAlign: "center",
    },
    cardContainer: {
      backgroundColor: "#fff",
      flex: 3,
      borderRadius: 20,
      padding: 5,
      paddingHorizontal: 15,
    },
  });
};
