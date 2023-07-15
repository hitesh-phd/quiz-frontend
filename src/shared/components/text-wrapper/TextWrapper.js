import React from "react";
import RNText, { IRNTextProps } from "@freakycoder/react-native-custom-text";

import fonts from "@fonts";

const TextWrapper = ({
  fontFamily = fonts.montserrat.regular,
  color = "#757575",
  children,
  ...rest
}) => {
  return (
    <RNText fontFamily={fontFamily} color={color} {...rest}>
      {children}
    </RNText>
  );
};

export default TextWrapper;
