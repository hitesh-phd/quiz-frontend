import React, { useMemo } from "react";
import { StatusBar, View, SafeAreaView } from "react-native";

import createStyles from "./MyStatusBar.style";

type MyStatusBarProps = {
  backgroundColor?: string;
  barStyle?: "light-content" | "dark-content" | "default";
};

const MyStatusBar: React.FC<MyStatusBarProps> = ({
  backgroundColor = "transparent",
  barStyle = "dark-content",
  ...props
}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor={backgroundColor}
          barStyle={barStyle}
          {...props}
        />
      </SafeAreaView>
    </View>
  );
};

export default MyStatusBar;
