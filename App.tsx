import "react-native-gesture-handler";
import React from "react";
import { StatusBar, useColorScheme, LogBox } from "react-native";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import SplashScreen from "react-native-splash-screen";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { isAndroid } from "@freakycoder/react-native-helpers";

import store from "@services/redux/Store";
import Navigation from "./src/navigation";
import { palette } from "@theme/themes";

LogBox.ignoreAllLogs();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  const persistor = persistStore(store);

  console.log("store: ", store);

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor(palette.background, true);
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, [scheme, isDarkMode]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <StatusBar barStyle="light-content" />
          <Navigation />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
