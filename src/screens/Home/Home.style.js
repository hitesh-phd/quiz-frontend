import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";

export default (theme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      width: ScreenWidth,
    },
    scrollContainer: {
      justifyContent: "space-between",
      width: ScreenWidth,
      paddingBottom: 25,
      backgroundColor: colors.background,
    },
    mainContainer: {
      flex: 6,
      backgroundColor: colors.white,
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      paddingHorizontal: 10,
    },
    headerContainer: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: colors.background,
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
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: 20,
      paddingBottom: 40,
    },
    categoryItem: {
      width: ScreenWidth * 0.5 - 30,
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
