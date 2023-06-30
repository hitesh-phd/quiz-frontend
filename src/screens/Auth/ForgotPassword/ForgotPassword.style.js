import { ViewStyle, StyleSheet } from "react-native";

export default () => {
  return StyleSheet.create({
    formContainer: {
      flex: 1,
      padding: 20,
    },
    buttonContainer: {
      marginVertical: 20,
      flex: 1,
      justifyContent: "flex-end",
    },
  });
};
