import React, { useMemo } from "react";
import { ScrollView, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

import createStyles from "./Home.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import Header from "./components/Header/Header";
import TopPickCard from "./components/TopPick/TopPickCard";
import { palette } from "@theme/themes";
import MyStatusBar from "@shared-components/MyStatusBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { OPACITY } from "@shared-constants";

type Props = {
  navigation: any;
};

// type CategoryItem = {
//   id: string;
//   title: string;
//   color: string;
//   icon: string;
//   iconType: string;
//   noOfQuizzes: number;
// };

const DUMMY_CATEGORIES = [
  {
    id: "c1",
    title: "science",
    color: palette.primary,
    icon: "science",
    iconType: "MaterialIcons",
    noOfQuizzes: 10,
  },
  {
    id: "c2",
    title: "Music",
    color: palette.secondary,
    icon: "music",
    iconType: "Foundation",
    noOfQuizzes: 14,
  },
  {
    id: "c3",
    title: "History",
    color: palette.calpyse,
    icon: "book-outline",
    iconType: "Ionicons",
    noOfQuizzes: 19,
  },
  {
    id: "c4",
    title: "science",
    color: palette.highlight,
    icon: "science",
    iconType: "MaterialIcons",
    noOfQuizzes: 10,
  },
  {
    id: "c5",
    title: "Music",
    color: palette.secondary,
    icon: "music",
    iconType: "Foundation",
    noOfQuizzes: 14,
  },
  {
    id: "c6",
    title: "History",
    color: palette.background,
    icon: "book-outline",
    iconType: "Ionicons",
    noOfQuizzes: 22,
  },
];

const Home = ({ navigation }: Props) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <MyStatusBar />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={{
          backgroundColor: colors.background,
          flexGrow: 1,
        }}
      >
        <View style={styles.headerContainer}>
          <Header greeting="Good Morning" userName="John Doe" />
          <TopPickCard
            header="Top Pick"
            title="Travel Trivia Quiz"
            headerBackgroundColor="#FF8FA2"
            titleColor="#6C0819"
          />
        </View>
        <View style={styles.mainContainer}>
          <Text
            h2
            color="black"
            bold
            style={{ marginTop: 20, paddingHorizontal: 10 }}
          >
            Top rank of the week
          </Text>
          <View style={styles.topRankContainer}>
            {/* <ImageBackground
              source={require("@assets/splash/shifaaz-shamoon-unsplash.jpg")}
              style={{
                width: ScreenWidth * 0.9,
                height: 120,
                justifyContent: "center",
                padding: 10,
                borderRadius: 25,
                overflow: "hidden",
              }}
              resizeMode="cover"
            > */}

            <Text h3 color="white" bold style={styles.text1}>
              1
            </Text>
            <Avatar.Icon
              size={70}
              icon="account-circle-outline"
              style={{ marginHorizontal: 20 }}
            />
            <View style={{ marginHorizontal: 10 }}>
              <Text h3 color="white" bold style={{ marginBottom: 5 }}>
                John Doe
              </Text>
              <Text h3 color="white" bold>
                1000
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon
                name="crown"
                type={IconType.MaterialCommunityIcons}
                size={24}
                color="white"
              />
            </View>
          </View>
          {/* </ImageBackground> */}
          <Text
            h2
            color="black"
            bold
            style={{ marginTop: 20, paddingHorizontal: 10 }}
          >
            Categories
          </Text>
          <View style={styles.categoryContainer}>
            {DUMMY_CATEGORIES.map((item) => (
              <TouchableOpacity
                style={[styles.categoryItem, { backgroundColor: item.color }]}
                key={item.id}
                activeOpacity={OPACITY.SEMI_FULL}
              >
                <View style={styles.categoryIconContainer}>
                  <Icon
                    name={item.icon}
                    type={IconType[item.iconType as keyof typeof IconType]}
                    size={24}
                    color={colors.white}
                  />
                </View>
                <Text h3 color={colors.white} bold style={{ marginTop: 10 }}>
                  {item.title}
                </Text>
                <Text h3 color={colors.white} bold style={{ marginTop: 10 }}>
                  {item.noOfQuizzes} Quizzes
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
