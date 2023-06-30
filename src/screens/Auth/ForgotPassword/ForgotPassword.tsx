import React, { useMemo } from "react";
import { View } from "react-native";
import * as Yup from "yup";

import createStyles from "./ForgotPassword.style";
import NavBar from "@shared-components/NavBar/NavBar";
import AppScreen from "@shared-components/UI/AppScreen/AppScreen";
import Button from "@shared-components/UI/Button/Button";
import { Form, FormField } from "@shared-components/Forms";

const ForgotPassword = () => {
  const styles = useMemo(() => createStyles(), []);

  const resetFormSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
  });

  return (
    <AppScreen>
      <NavBar title="Reset Password" />
      <View style={styles.formContainer}>
        <Form
          initialValues={{ email: "" }}
          validationSchema={resetFormSchema}
          onSubmit={(values) => console.log(values)}
        >
          <View style={{ flex: 1 }}>
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
            <View style={styles.buttonContainer}>
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

export default ForgotPassword;
