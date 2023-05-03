import React, { useMemo } from "react";
import { View, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation, useTheme } from "@react-navigation/native";

import createStyles from "./NavBar.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

type NavBarProps = {
  color?: string;
  title: string;
};

const NavBar = ({ color = "transparent", title }: NavBarProps) => {
  const navigate = useNavigation();
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleBackButton = () => {
    navigate.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors[color] }]}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={handleBackButton}>
          <MaterialIcons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
      </View>
      <Text h2 center color={colors.black} style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default NavBar;
