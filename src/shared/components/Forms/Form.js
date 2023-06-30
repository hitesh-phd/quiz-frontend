import React from "react";
import { Formik, FormikConfig, FormikValues, FormikHelpers } from "formik";

const Form = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  ...rest
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...rest}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default Form;
