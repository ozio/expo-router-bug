import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push({
          pathname: "/[id]",
          params: { id: Math.round(Math.random() * 1000) },
        })}
      >
        <Text style={styles.buttonText}>Go deeper</Text>
      </TouchableOpacity>
      <View style={styles.id}>
        <Text style={styles.idText}>{id}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    padding: 20,
    backgroundColor: "#000",
  },
  buttonText: {
    color: "#fff",
  },
  id: {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: "#aaa",
  },
  idText: {
    color: "#fff",
  }
});
