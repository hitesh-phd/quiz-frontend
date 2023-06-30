import React, { useEffect } from "react";
import { useColorScheme, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { useAppSelector } from "../services/redux/Hook";

import Home from "@screens/Home/Home";
import LeaderBoard from "@screens/LeaderBoard/LeaderBoard";
import UserProfile from "@screens/UserProfile/UserProfile";
import OnBoarding from "@screens/onBoarding/OnBoarding";
import { NewPassword, ForgotPassword, Login, Register } from "@screens/Auth";
import QuizOverview from "@screens/Quiz/QuizOverview/QuizOverview";
import { selectIsAuthenticated } from "@services/redux/AuthenticationSlice";
import { LightTheme, DarkTheme, palette } from "@theme/themes";
import { SCREENS } from "@shared-constants";
import { RootStackParams } from "./types";
import Quiz from "@screens/Quiz/Quiz";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParams>();

// type RootStackParamList = {
// [SCREENS.HOME]: undefined;
//   [SCREENS.LEADER_BOARD]: undefined;
//   [SCREENS.USER_PROFILE]: undefined;
//   [SCREENS.ON_BOARDING]: undefined;
//   [SCREENS.LOGIN]: undefined;
//   [SCREENS.REGISTER]: undefined;
//   [SCREENS.NEW_PASSWORD]: undefined;
//   [SCREENS.FORGOT_PASSWORD]: undefined;
//   [SCREENS.QUIZ]: undefined;
//   [SCREENS.QUIZ_OVERVIEW]: undefined;
// };

// export type RootStackNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   keyof RootStackParamList
// >;

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Quiz" component={Quiz} />
    <Stack.Screen name="QuizOverview" component={QuizOverview} />
  </Stack.Navigator>
);

const renderTabIcon = (
  route: any,
  focused: boolean,
  color: string,
  size: number,
) => {
  let iconName = "home";
  switch (route.name) {
    case SCREENS.HOME:
      iconName = focused ? "home" : "home-outline";
      break;
    case SCREENS.LEADER_BOARD:
      return focused ? (
        <Icon
          name="leaderboard"
          type={IconType.MaterialIcons}
          size={size}
          color={color}
        />
      ) : (
        <Image
          source={require("@assets/images/leaderBoard.png")}
          style={{ width: 30, height: 30 }}
        />
      );
    case SCREENS.USER_PROFILE:
      iconName = focused ? "person" : "person-outline";
      break;
    default:
      iconName = focused ? "home" : "home-outline";
      break;
  }

  return (
    <Icon name={iconName} type={IconType.Ionicons} size={size} color={color} />
  );
};

const RenderTabNavigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          renderTabIcon(route, focused, color, size),
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: isDarkMode ? palette.black : palette.white,
          borderTopWidth: 0,
          elevation: 0,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          height: 60,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        },
      })}
    >
      <Tab.Screen name={SCREENS.HOME_STACK} component={HomeStack} />
      <Tab.Screen name={SCREENS.LEADER_BOARD} component={LeaderBoard} />
      <Tab.Screen name={SCREENS.USER_PROFILE} component={UserProfile} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="MainStack" component={RenderTabNavigation} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
