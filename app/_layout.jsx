import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Lexend",
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#eeeeee",
          paddingHorizontal: 10,
          paddingVertical: 20,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="notes" options={{ headerTitle: "Notes" }} />
    </Stack>
  );
}
