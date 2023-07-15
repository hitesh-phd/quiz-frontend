import React from "react";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { FormikErrors, FormikTouched } from "formik";

import { StyleSheet } from "react-native";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return (
    <Text h4 color="red" style={styles.error}>
      {error}
    </Text>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default ErrorMessage;
