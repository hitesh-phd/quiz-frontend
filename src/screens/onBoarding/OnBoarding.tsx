import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { View, Image } from "react-native";
import { navigate } from "react-navigation-helpers";

import createStyles from "./OnBoarding.style";
import Button from "@shared-components/UI/Button/Button";
import AppScreen from "@shared-components/UI/AppScreen/AppScreen";
import Text from "@shared-components/text-wrapper/TextWrapper";

import { ICONS, SCREENS } from "@shared-constants";

const OnBoarding: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const onLoginButtonHandler = () => {
    console.log("Login");
    navigate(SCREENS.LOGIN);
  };

  const onSignUpButtonHandler = () => {
    navigate(SCREENS.REGISTER);
  };

  return (
    <AppScreen style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={ICONS.LOGO} style={{}} />
        <Image
          source={ICONS.ILLUSTRATION}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <View style={styles.cardContainer}>
        <Text h2 color={colors.black} style={styles.title}>
          Login or Sign Up
        </Text>
        <Text h4 style={styles.subTitle}>
          Login or create an account to take quiz, take part in challenges and
          more.
        </Text>
        <Button onPress={onLoginButtonHandler} title="Login" />
        <Button
          onPress={onSignUpButtonHandler}
          title="Create an account"
          color="whisper"
          textColor={colors.primary}
        />
        {/* <Button
          onPress={() => {
            console.log("Continue as a guest");
          }}
          title="Later"
          color="transparent"
          textColor={colors.placeholder}
        /> */}
        <Text h4 style={styles.subTitle}>
          Later
        </Text>
      </View>
    </AppScreen>
  );
};

export default OnBoarding;
