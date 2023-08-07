import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* if you uncomment following tag it can't go deep with animation: */}
      <Stack.Screen
        name="[id]"
        options={{
          title: "title",
        }}
      />
    </Stack>
  );
}
