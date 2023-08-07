import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push({
          pathname: "/[id]",
          params: { id: Math.round(Math.random() * 1000) },
        })}
      >
        <Text style={styles.buttonText}>Go inside</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    padding: 20,
    backgroundColor: "red",
  },
  buttonText: {
    color: "#fff",
  }
});
