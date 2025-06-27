import { Image } from "expo-image";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
     <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold text-black">
        Welcome to Nativewind! cong
      </Text>
    </View>
    <ScrollView className="w-full  " horizontal >
      {
        [1,2,3,23,434,5,356,456,5,6,7,8,].map((e,index)=>{
          return (
            <View key={index} className="min-w-10 bg-slate-400 rounded-lg px-3 py-2  m-2 flex justify-center items-center ">
              <Text className="text-white ">
                {e}
              </Text>
            </View>
          )
        })
      }
    </ScrollView>
      <ThemedView style={styles.titleContainer}>
        <Text   >
          Welcome! cong 2
        </Text>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">
            npm run reset-project
          </ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});


{
  "message": {
    "data":{
    "foo":"bar",
    "baz":"qux"
  },
    
  "token":"c3vpvvysS7GMDe0YaLpOkC:APA91bFWL-RJfH36giriW8B95uayT4NLoX4aNJyUYcZk7IHvUs6EY8a0nmdsSG0YQUboy_QZqIQp2hKdtO3smSB8T8RGe8w4w_2Y5ENWEGtf4JExcAwaFhY"
  },
  
}