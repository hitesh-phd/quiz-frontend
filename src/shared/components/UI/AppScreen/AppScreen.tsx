import React, { ReactNode, useMemo } from "react";
import { SafeAreaView, ViewStyle } from "react-native";
import createStyles from "./AppScreen.style";

interface ScreenProps {
  children?: ReactNode;
  style?: ViewStyle;
}

const AppScreen = ({ children, style }: ScreenProps) => {
  const styles = useMemo(() => createStyles(), []);

  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default AppScreen;
