import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";

export default (theme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      width: ScreenWidth,
      paddingBottom: 70,
      backgroundColor: colors.white,
    },
    mainContainer: {
      flex: 6,
      backgroundColor: colors.white,
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      paddingHorizontal: 10,
    },
    logoutContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    pressed: {
      opacity: 0.75,
    },
    topRankContainer: {
      flexDirection: "row",
      alignItems: "center",
      height: 120,
      marginTop: 20,
      padding: 10,
      paddingLeft: 20,
      borderRadius: 25,
      backgroundColor: colors.background,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    iconContainer: {
      position: "absolute",
      backgroundColor: "#FFD54B",
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 10,
      borderRadius: 50,
      right: 10,
      top: -20,
    },
    text1: {
      borderWidth: 2,
      borderColor: colors.white,
      borderRadius: 50,
      width: 30,
      height: 30,
      textAlign: "center",
    },
    categoryContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 40,
    },
    categoryItem: {
      width: ScreenWidth * 0.5 - 25,
      height: 180,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      margin: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    categoryIconContainer: {
      width: 60,
      height: 60,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(208,215,222,0.4)",
    },
  });
};
