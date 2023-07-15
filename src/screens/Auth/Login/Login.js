import React, { useState, useMemo } from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, Divider } from "react-native-paper";
import { object, string } from "yup";

import createStyles from "./Login.style";
import Button from "@shared-components/UI/Button/Button";
import NavBar from "@shared-components/NavBar/NavBar";
import Text from "@shared-components/text-wrapper/TextWrapper";
import Form from "@shared-components/Forms/Form";
import FormField from "@shared-components/Forms/FormField";
import SubmitButton from "@shared-components/Forms/SubmitButton";
import MyStatusBar from "@shared-components/MyStatusBar";
import { ICONS } from "@shared-constants";
import { loginAction } from "@services/redux/AuthenticationSlice";

const Login = () => {
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
    email: string().email().required("Email is required"),
    password: string()
      .required("Password is required")
      .min(8, "Your Password has to be at least 8 characters long"),
  });

  const onLogin = (email, password) => {
    dispatch(loginAction({ email, password }));
  };

  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor={colors.primary} />
      <NavBar title="Login" />
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <View style={{ ...styles.innerContainer, opacity: loading ? 0.5 : 1 }}>
        <Button
          onPress={() => {}}
          title="Login with Google"
          color="white"
          textColor="title"
          imageSrc={ICONS.GOOGLE}
        />
        <Button
          onPress={() => {}}
          title="Login with Facebook"
          color="blueLobster"
          textColor="white"
          imageSrc={ICONS.FACEBOOK}
        />
        <View style={{ marginVertical: 30 }}>
          <Divider bold />
          <Text h4 bold style={styles.orTextStyle}>
            OR
          </Text>
        </View>
        <Form
          initialValues={{ email: "", password: "" }}
          validationSchema={loginFormSchema}
          onSubmit={(values) => {
            onLogin(values.email, values.password);
          }}
        >
          <FormField
            label="Email Address "
            leftIcon="email-outline"
            name="email"
            placeholder=" Your email address"
            // icon="email"
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
          {/* <Button
            onPress={handleSubmit}
            title="Login"
            color="primary"
            textColor="white"
          /> */}
          <SubmitButton title="Login" color="primary" textColor="white" />
          <TouchableOpacity onPress={() => {}}>
            <Text
              h4
              center
              color={colors.primary}
              style={styles.forgotPasswordStyle}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <Text h5 center style={{ marginTop: 20 }}>
            By continuing, you agree to <Text bold>our Terms of Services </Text>
            &<Text bold> Privacy Policy</Text>
          </Text>
        </Form>
      </View>
    </View>
  );
};
export default Login;
