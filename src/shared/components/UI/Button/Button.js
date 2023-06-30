import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { View, Pressable, Image, ImageSourcePropType } from "react-native";
import Text from "@shared-components/text-wrapper/TextWrapper";

import createStyles from "./Button.style";

const Button = ({
  onPress,
  title,
  color = "primary",
  textColor = "#fff",
  imageSrc = null,
}) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                styles.buttonInnerContainer,
                styles.pressed,
                { backgroundColor: colors[color] },
              ]
            : [styles.buttonInnerContainer, { backgroundColor: colors[color] }]
        }
        onPress={onPress}
        android_ripple={{ color: colors.white }}
      >
        {imageSrc && <Image source={imageSrc} style={styles.image} />}
        <Text h4 center color={textColor} style={styles.buttonText}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
