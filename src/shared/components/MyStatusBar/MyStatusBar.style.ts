import { ViewStyle, StyleSheet, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-safearea-height";
import { isIOS } from "@freakycoder/react-native-helpers";

export const STATUS_BAR_HEIGHT = isIOS
  ? getStatusBarHeight()
  : StatusBar.currentHeight || 0;

interface Style {
  statusBar: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    statusBar: {
      height: STATUS_BAR_HEIGHT,
    },
  });
};
