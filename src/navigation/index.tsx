import React, { useEffect } from "react";
import { TouchableOpacity, useColorScheme, Image } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import {
  NavigationContainer,
  RouteProp,
  DefaultTheme,
} from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAppSelector } from "../services/redux/Hook";

import Home from "@screens/Home/Home";
import LeaderBoard from "@screens/LeaderBoard/LeaderBoard";
import UserProfile from "@screens/UserProfile/UserProfile";
import OnBoarding from "@screens/onBoarding/OnBoarding";
import { NewPassword, ForgotPassword, Login, Register } from "@screens/Auth";
import { selectIsAuthenticated } from "@services/redux/AuthenticationSlice";
import { LightTheme, DarkTheme, palette } from "@theme/themes";
import { SCREENS } from "@shared-constants";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = "home";
    let iconType = "Ionicons";
    switch (route.name) {
      case SCREENS.HOME:
        iconName = focused ? "home" : "home-outline";
        break;
      case SCREENS.LEADER_BOARD:
        return focused ? (
          <Icon
            name="leaderboard"
            type="MaterialIcons"
            size={size}
            color={color}
          />
        ) : (
          <Image
            source={require("@assets/images/leaderBoard.png")}
            style={{ width: 30, height: 30 }}
          />
        );
        break;
      case SCREENS.USER_PROFILE:
        iconName = focused ? "person" : "person-outline";
        break;
      default:
        iconName = focused ? "home" : "home-outline";
        break;
    }

    return <Icon name={iconName} type={iconType} size={size} color={color} />;
  };

  const renderTabNavigation = () => {
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

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.ON_BOARDING} component={OnBoarding} />
        <Stack.Screen name={SCREENS.LOGIN} component={Login} />
        <Stack.Screen name={SCREENS.REGISTER} component={Register} />
        <Stack.Screen name={SCREENS.NEW_PASSWORD} component={NewPassword} />
        <Stack.Screen
          name={SCREENS.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
      </Stack.Navigator>
    );
  };

  const HomeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.HOME} component={Home} />
    </Stack.Navigator>
  );

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
          <Stack.Screen
            name={SCREENS.HOME_STACK}
            component={renderTabNavigation}
          />
        ) : (
          <Stack.Screen name={SCREENS.AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
