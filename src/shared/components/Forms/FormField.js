import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { useFormikContext } from "formik";
import { TextInput, TextInputProps } from "react-native-paper";
import Icon from "react-native-dynamic-vector-icons";

import createStyles from "./FormField.style";
import ErrorMessage from "./ErrorMessage";
import Text from "@shared-components/text-wrapper/TextWrapper";

const CustomIcon = ({ name, type, color }) => (
  <Icon name={name} type={type} size={20} color={color} />
);

const FormField = ({
  name,
  label = "",
  rightIcon = "",
  leftIcon = "",
  iconColor = "primary",
  onRightIconPress = () => {},
  iconType = "MaterialCommunityIcons",
  ...otherProps
}) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      {label && (
        <Text h4 bold>
          {label}
        </Text>
      )}
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        mode="outlined"
        style={styles.inputContainer}
        right={
          rightIcon && (
            <TextInput.Icon
              icon={rightIcon}
              onPress={onRightIconPress}
              iconColor="rgb(199, 198, 203)"
            />
          )
        }
        // left={
        //   leftIcon && (
        //     <TextInput.Icon icon={leftIcon} iconColor={colors.primary} />
        //   )
        // }
        left={
          leftIcon && (
            <TextInput.Icon
              icon={() => (
                <CustomIcon
                  color={colors[iconColor]}
                  type={iconType}
                  name={leftIcon}
                />
              )}
            />
          )
        }
        outlineStyle={styles.inputOutline}
        outlineColor="transparent"
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
