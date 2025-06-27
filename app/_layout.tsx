import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../styles/global.css";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import Permission from "@/components/Permission";
import messaging from "@react-native-firebase/messaging";
import * as Notifications from "expo-notifications";
import { Text, View, AppRegistry, Platform } from "react-native";
import { useEffect } from "react";

console.log("RootLayout");
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (Platform.OS === "android") {
      Notifications.getNotificationChannelsAsync().then((value) => {
        console.log("====================================");
        console.log({ getNotificationChannelsAsync:value });
        console.log("====================================");
      });
    }
    const notificationListener = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("====================================");
        console.log({ notification });
        console.log("====================================");
      }
    );

    const responseListener =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log({response});
      });

    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      <Permission />
    </ThemeProvider>
  );
}

