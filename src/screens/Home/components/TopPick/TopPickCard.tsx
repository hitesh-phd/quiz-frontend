import React, { useMemo } from "react";
import { ImageBackground, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import createStyles from "./TopPickCard.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

type Props = {
  header: string;
  title: string;
  headerBackgroundColor: string;
  titleColor: string;
};

const TopPickCard = ({
  header,
  title,
  headerBackgroundColor,
  titleColor,
}: Props) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@assets/splash/shifaaz-shamoon-unsplash.jpg")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.contentContainer}>
          <View
            style={{
              ...styles.headerContainer,
              backgroundColor: headerBackgroundColor,
            }}
          >
            <Text h4 color="white" bold>
              {header}
            </Text>
          </View>
          <View>
            <Text h3 color={titleColor} bold>
              {title}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TopPickCard;
