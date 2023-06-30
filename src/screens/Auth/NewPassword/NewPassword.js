import React, { useMemo, useState } from "react";
import { View } from "react-native";
import * as Yup from "yup";

import createStyles from "./NewPassword.style";
import NavBar from "@shared-components/NavBar/NavBar";
import AppScreen from "@shared-components/UI/AppScreen/AppScreen";
import Text from "@shared-components/text-wrapper/TextWrapper";
import Button from "@shared-components/UI/Button/Button";
import { Form, FormField } from "@shared-components/Forms";

const NewPassword = () => {
  const styles = useMemo(() => createStyles(), []);

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
    setSecureTextEntry((prev) => !prev);
  };

  const newPasswordFormSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <AppScreen>
      <NavBar title="New Password" />
      <View style={styles.innerContainer}>
        <Text h4>
          Your new password must be different from previous used passwords
        </Text>
        <Form
          initialValues={{ newPassword: "", confirmPassword: "" }}
          validationSchema={newPasswordFormSchema}
          onSubmit={(values) => console.log(values)}
        >
          <View style={styles.formInnerContainer}>
            <FormField
              label="Password"
              leftIcon="lock-outline"
              rightIcon={showPassword ? "eye-outline" : "eye-off-outline"}
              onRightIconPress={togglePassword}
              name="newPassword"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={secureTextEntry}
              textContentType="password"
            />
            <FormField
              label="Confirm Password"
              leftIcon="lock-outline"
              rightIcon={showPassword ? "eye-outline" : "eye-off-outline"}
              onRightIconPress={togglePassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={secureTextEntry}
              textContentType="password"
            />
            <View>
              <Button
                onPress={() => {}}
                title="Reset Password"
                color="primary"
                textColor="white"
              />
            </View>
          </View>
        </Form>
      </View>
    </AppScreen>
  );
};

export default NewPassword;
