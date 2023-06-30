//  AUTH_STACK: "AuthStack",
//   HOME_STACK: "HomeStack",
//   MAIN_STACK: "MainStack",
//   HOME: "Home",
//   LEADER_BOARD: "LeaderBoard",
//   USER_PROFILE: "UserProfile",
//   SEARCH: "Search",
//   NOTIFICATION: "Notification",
//   PROFILE: "Profile",
//   DETAIL: "Detail",
//   LOGIN: "Login",
//   REGISTER: "Register",
//   FORGOT_PASSWORD: "ForgotPassword",
//   NEW_PASSWORD: "NewPassword",
//   ON_BOARDING: "OnBoarding",
//   QUIZ: "Quiz",
//   QUIZ_RESULT: "QuizResult",
//   QUIZ_DETAIL: "QuizDetail",
//   QUIZ_DETAIL_RESULT: "QuizDetailResult",
//   QUIZ_OVERVIEW: "QuizOverview",

export type RootStackParams = {
  AuthStack: undefined;
  HomeStack: undefined;
  MainStack: undefined;
  Home: undefined;
  LeaderBoard: undefined;
  UserProfile: undefined;
  Search: undefined;
  Notification: undefined;
  Profile: undefined;
  Detail: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  NewPassword: undefined;
  OnBoarding: undefined;
  Quiz: {
    categoryId: string;
  };
  QuizOverview: {
    categoryId: string;
    categoryName: string;
  };
  QuizResult: undefined;
  QuizDetail: undefined;
  QuizDetailResult: undefined;
};
