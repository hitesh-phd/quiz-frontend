import Toast from "react-native-toast-message";

import { STATUS_BAR_HEIGHT } from "@shared-components/MyStatusBar/MyStatusBar.style";

export const ToastMessage = {
  showErrorMessage: (title: string) => {
    Toast.show({
      text1: title,
      type: "error",
      topOffset: STATUS_BAR_HEIGHT + 10,
    });
  },

  showSuccessMessage: (title: string) => {
    Toast.show({
      text1: title,
      type: "success",
      topOffset: STATUS_BAR_HEIGHT + 10,
    });
  },
};
