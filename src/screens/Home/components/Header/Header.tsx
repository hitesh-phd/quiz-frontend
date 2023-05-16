import React, { useMemo } from "react";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

import createStyles from "./Header.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

type Props = {
  userName: string;
  greeting: string;
};

const Header = ({ userName, greeting }: Props) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text h3 bold color="#F5CEDD">
          {greeting}
        </Text>
        <Text h4 bold color="white">
          {userName}
        </Text>
      </View>
      <View>
        <Avatar.Icon size={55} icon="account-circle-outline" />
      </View>
    </View>
  );
};

export default Header;
