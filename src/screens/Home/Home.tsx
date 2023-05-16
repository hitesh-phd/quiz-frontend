import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

import AppScreen from "@shared-components/UI/AppScreen/AppScreen";
import Header from "./components/Header/Header";
import TopPickCard from "./components/TopPick/TopPickCard";
import { palette } from "@theme/themes";

type Props = {};

const Home = (props: Props) => {
  return (
    <AppScreen
      style={{
        backgroundColor: palette.secondaryBackground,
        width: ScreenWidth * 0.9,
        alignSelf: "center",
      }}
    >
      <Header greeting="Good Morning" userName="John Doe" />
      <TopPickCard
        header="Top Pick"
        title="Travel Trivia Quiz"
        headerBackgroundColor="#FF8FA2"
        titleColor="#6C0819"
      />
    </AppScreen>
  );
};

export default Home;

const styles = StyleSheet.create({});
