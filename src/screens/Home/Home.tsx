import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppScreen from "@shared-components/UI/AppScreen/AppScreen";
import { palette } from "@theme/themes";

type Props = {};

const Home = (props: Props) => {
  return (
    <AppScreen
      style={{
        backgroundColor: palette.secondaryBackground,
      }}
    >
      <Text>Home</Text>
    </AppScreen>
  );
};

export default Home;

const styles = StyleSheet.create({});
