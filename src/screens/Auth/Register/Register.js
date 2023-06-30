import React, { useState, useMemo } from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import { object, string } from "yup";
import { navigate } from "react-navigation-helpers";

import createStyles from "./Register.style";
import NavBar from "@shared-components/NavBar/NavBar";
import Text from "@shared-components/text-wrapper/TextWrapper";
import Form from "@shared-components/Forms/Form";
import FormField from "@shared-components/Forms/FormField";
import MyStatusBar from "@shared-components/MyStatusBar";
import SubmitButton from "@shared-components/Forms/SubmitButton";
import { registerAction } from "@services/redux/AuthenticationSlice";
import { SCREENS } from "@shared-constants";

const Register = () => {
  const { loading, error } = useSelector((state) => state.Auth);
  console.log("error in Login Page", error);
  console.log("loading in Login Page", loading);

  const dispatch = useDispatch();
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
    setSecureTextEntry((prev) => !prev);
  };

  const loginFormSchema = object().shape({
    name: string().required("Name is required"),
    email: string().email().required("Email is required"),
    password: string()
      .required("Password is required")
      .min(8, "Your Password has to be at least 8 characters long"),
    confirmPassword: string()
      .required("Confirm Password is required")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  });

  const handleRegister = (name, email, password) => {
    dispatch(registerAction({ name, email, password }));
  };

  const handleLoginButton = () => {
    navigate(SCREENS.LOGIN);
  };

  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor={colors.primary} />
      <NavBar title="Register" />
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <View style={{ ...styles.innerContainer, opacity: loading ? 0.5 : 1 }}>
        <Form
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={loginFormSchema}
          onSubmit={(values) => {
            handleRegister(values.name, values.email, values.password);
          }}
        >
          <FormField
            label="Name"
            leftIcon="user-o"
            name="name"
            placeholder=" Your Name"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="name"
            iconType="FontAwesome"
          />
          <FormField
            label="Email Address "
            leftIcon="email-outline"
            name="email"
            placeholder=" Your email address"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <FormField
            label="Password"
            leftIcon="lock-outline"
            rightIcon={showPassword ? "eye-outline" : "eye-off-outline"}
            onRightIconPress={togglePassword}
            name="password"
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
          <SubmitButton title="Register" color="primary" textColor="white" />
          <View style={styles.loginTextContainer}>
            <Text h4 center color={colors.black} style={styles.loginTextStyle}>
              Alredy have an account?{" "}
            </Text>
            <TouchableOpacity onPress={handleLoginButton}>
              <Text center color={colors.primary} style={styles.loginTextStyle}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <Text h5 center style={{ marginTop: 20 }}>
            By continuing, you agree to <Text bold>our Terms of Services </Text>
            &<Text bold> Privacy Policy</Text>
          </Text>
        </Form>
      </View>
    </View>
  );
};
export default Register;
