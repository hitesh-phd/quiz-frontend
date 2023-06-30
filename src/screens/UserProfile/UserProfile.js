import React, { useMemo } from "react";
import { Pressable, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import createStyles from "./UserProfile.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import MyStatusBar from "@shared-components/MyStatusBar";
import { Logout } from "@services/redux/AuthenticationSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleLogout = () => {
    dispatch(Logout());
  };
  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor={colors.primary} />
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Text>Profile</Text>
        <Pressable
          onPress={handleLogout}
          style={({ pressed }) =>
            pressed
              ? [styles.logoutContainer, styles.pressed]
              : [styles.logoutContainer]
          }
          android_ripple={{ color: colors.white }}
        >
          <Text h3 color="red">
            Logout
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserProfile;
