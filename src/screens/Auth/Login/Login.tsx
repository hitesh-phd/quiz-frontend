import React, { useState, useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import createStyles from "./Login.style";
import Button from "@shared-components/UI/Button/Button";
import NavBar from "@shared-components/NavBar/NavBar";
import MainView from "@shared-components/UI/MainView/MainView";
import Text from "@shared-components/text-wrapper/TextWrapper";

import { ICONS } from "@shared-constants";
import { Divider, Subheading } from "react-native-paper";
import Form from "@shared-components/Forms/Form";
import FormField from "@shared-components/Forms/FormField";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import NewPassword from "../NewPassword/NewPassword";
import { useDispatch } from "react-redux";
import { loginAction } from "@services/redux/AuthenticationSlice";
import { AppDispatch } from "@services/redux/Store";

import SubmitButton from "@shared-components/Forms/SubmitButton";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
    setSecureTextEntry((prev) => !prev);
  };

  const loginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(1, "Your Password has to be at least 8 characters long"),
  });

  const onLogin = (email: string, password: string) => {
    console.log("email", email);
    console.log("password", password);
    // dispatch(loginAction({ email, password }));
  };

  return (
    <MainView style={{}}>
      <NavBar title="Login" />
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
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
        <View
          style={{
            marginVertical: 30,
          }}
        >
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
          <Text
            h5
            center
            style={{
              marginTop: 20,
            }}
          >
            By continuing, you agree to <Text bold>our Terms of Services </Text>
            &<Text bold> Privacy Policy</Text>
          </Text>
        </Form>
      </View>
    </MainView>
  );
};

export default Login;
