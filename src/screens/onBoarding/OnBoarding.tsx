import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { View, Image } from "react-native";

import Text from "@shared-components/text-wrapper/TextWrapper";
import createStyles from "./OnBoarding.style";

import { navigate } from "react-navigation-helpers";
import { ICONS, SCREENS } from "@shared-constants";
import Button from "@shared-components/UI/Button/Button";
import MainView from "@shared-components/UI/MainView/MainView";

type LoginProps = {};

const OnBoarding: React.FC<LoginProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const onLoginButtonHandler = () => {
    navigate(SCREENS.LOGIN);
  };

  const onSignUpButtonHandler = () => {
    navigate(SCREENS.REGISTER);
  };

  return (
    <MainView style={styles.container}>
      <View
        style={{
          flex: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={ICONS.LOGO} style={{}} />
        <Image
          source={ICONS.ILLUSTRATION}
          style={{
            width: 300,
            height: 300,
          }}
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
    </MainView>
  );
};

export default OnBoarding;
