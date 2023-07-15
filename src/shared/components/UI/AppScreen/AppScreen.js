import React, { ReactNode, useMemo } from "react";
import { SafeAreaView, ViewStyle } from "react-native";
import createStyles from "./AppScreen.style";

const AppScreen = ({ children, style }) => {
  const styles = useMemo(() => createStyles(), []);

  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default AppScreen;
