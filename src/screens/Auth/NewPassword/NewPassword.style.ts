import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  innerContainer: ViewStyle;
  formInnerContainer: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    innerContainer: {
      flex: 1,
      marginTop: 20,
    },
    formInnerContainer: { flex: 1, marginVertical: 30 },
  });
};
