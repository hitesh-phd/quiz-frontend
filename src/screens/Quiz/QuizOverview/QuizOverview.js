import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-dynamic-vector-icons";

import createStyles from "./QuizOverview.style";
import MyStatusBar from "@shared-components/MyStatusBar";
import NavBar from "@shared-components/NavBar/NavBar";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { FONT_WEIGHT } from "@shared-constants";
import { Divider } from "react-native-paper";
import Button from "@shared-components/UI/Button/Button";

const QuizOverview = ({ categoryId }) => {
  // const { categoryId, categoryName } = route.params;
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleStartQuiz = () => {
    navigation.navigate("Quiz", { categoryId });
  };

  return (
    <View style={styles.container}>
      <MyStatusBar />
      <NavBar title="" iconColor="white" />
      <View style={styles.headerContainer} />
      <View style={styles.mainContainer}>
        <View>
          <Text
            h3
            color={colors.title}
            style={{ textTransform: "uppercase", marginVertical: 15 }}
          >
            {categoryName}
          </Text>
          <Text
            h1
            color={colors.black}
            style={{
              fontWeight: FONT_WEIGHT.Semibold,
            }}
          >
            Basic Trivia Quiz
          </Text>
          <View
            style={{
              backgroundColor: "#EFEEFC",
              borderRadius: 20,
              marginVertical: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: 25,
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Text h3 bold color="white">
                  ?
                </Text>
              </View>
              <Text
                h3
                color={colors.title}
                style={{
                  margin: 15,
                  fontWeight: FONT_WEIGHT.Bold,
                }}
              >
                10 Questions
              </Text>
            </View>
            <Divider style={{ height: 25, width: 1 }} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#FF8FA2",
                  borderRadius: 25,
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Icon
                  name="puzzle-outline"
                  type="MaterialCommunityIcons"
                  size={20}
                  color="white"
                />
              </View>
              <Text
                h3
                color={colors.title}
                style={{
                  margin: 15,
                  fontWeight: FONT_WEIGHT.Bold,
                }}
              >
                +100 Points
              </Text>
            </View>
          </View>
          <Text
            h3
            color={colors.title}
            style={{ marginTop: 15, textTransform: "uppercase" }}
          >
            Description
          </Text>
          <Text color={colors.black} style={{ margin: 15 }}>
            Get ready to test your knowledge in the {categoryName} category!
            Prepare yourself for a challenging quiz that will expand your
            understanding of {categoryName}. Answer the questions correctly to
            earn points and showcase your expertise. Good luck and enjoy the
            journey of learning
          </Text>
        </View>
        <Button onPress={handleStartQuiz} title="Start Quiz" />
      </View>
    </View>
  );
};

export default QuizOverview;
