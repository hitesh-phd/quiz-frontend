import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  formContainer: ViewStyle;
  buttonContainer: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
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
