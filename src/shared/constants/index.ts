type fontWeight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export const BASE_URL = "https://pixelhexdigital-quiz.onrender.com";

export const OPACITY = {
  FULL: 1,
  SEMI_FULL: 0.75,
  HALF: 0.5,
  NONE: 0,
};

// Font Weight Constants
export const FONT_WEIGHT = {
  Thin: "100" as fontWeight,
  UltraLight: "200" as fontWeight,
  Light: "300" as fontWeight,
  Regular: "400" as fontWeight,
  Medium: "500" as fontWeight,
  Semibold: "600" as fontWeight,
  Bold: "700" as fontWeight,
  Heavy: "800" as fontWeight,
  Black: "900" as fontWeight,
};

// API CALLING CONSTANTS
export const GET_API = "GET";
export const POST_API = "POST";
export const PUT_API = "PUT";
export const DELETE_API = "DELETE";
export const UPDATE_API = "PUT";

//ERROR CONSTANTS
export const NO_NETWORK_ERROR =
  "Your network seems to be very slow or not connected, please check and try again.";
export const SOMETHING_WENT_WRONG = "Something went wrong";

// ? Screens
export const SCREENS = {
  AUTH_STACK: "AuthStack",
  HOME_STACK: "HomeStack",
  MAIN_STACK: "MainStack",
  HOME: "Home",
  LEADER_BOARD: "LeaderBoard",
  USER_PROFILE: "UserProfile",
  SEARCH: "Search",
  NOTIFICATION: "Notification",
  PROFILE: "Profile",
  DETAIL: "Detail",
  LOGIN: "Login",
  REGISTER: "Register",
  FORGOT_PASSWORD: "ForgotPassword",
  NEW_PASSWORD: "NewPassword",
  ON_BOARDING: "OnBoarding",
};

// ? Icons
export const ICONS = {
  LOGO: require("@assets/images/appLogo.png"),
  GOOGLE: require("@assets/images/google.png"),
  FACEBOOK: require("@assets/images/facebook.png"),
  ILLUSTRATION: require("@assets/images/illustration.png"),
};
