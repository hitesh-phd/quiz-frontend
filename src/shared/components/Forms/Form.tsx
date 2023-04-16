import React from "react";
import { Formik, FormikConfig, FormikValues, FormikHelpers } from "formik";

interface AppFormProps<T extends FormikValues>
  extends Omit<FormikConfig<T>, "initialValues" | "onSubmit"> {
  initialValues: T;
  onSubmit: (values: T, helpers: FormikHelpers<T>) => void | Promise<any>;
  children: React.ReactNode;
}

const Form = <T extends FormikValues>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  ...rest
}: AppFormProps<T>) => {
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
