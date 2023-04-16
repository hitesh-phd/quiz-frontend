import React from "react";
import { useFormikContext } from "formik";
import Button from "@shared-components/UI/Button/Button";

interface SubmitButtonProps {
  title: string;
  color?: string;
  textColor?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  title,
  color,
  textColor,
}) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      onPress={handleSubmit}
      title={title}
      color={color}
      textColor={textColor}
    />
  );
};

export default SubmitButton;
