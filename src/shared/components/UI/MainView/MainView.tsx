import React, { ReactNode, useMemo } from "react";
import { SafeAreaView, ViewStyle } from "react-native";
import createStyles from "./MainView.style";

interface ScreenProps {
  children?: ReactNode;
  style?: ViewStyle;
}

const MainView = ({ children, style }: ScreenProps) => {
  const styles = useMemo(() => createStyles(), []);

  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default MainView;
