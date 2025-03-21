import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <View style={styles.divider}></View>
      <View style={styles.todos}>
        <Text style={styles.item}>Buy milk</Text>
        <Text style={styles.item}>Buy bread</Text>
        <Text style={styles.item}>Buy eggs</Text>
      </View>
      <View style={styles.button}>
        <Button title="Add New Todo" onPress={() => {}} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginTop: 45,
    marginBottom: 25,
  },
  todos: {
    flex: 1,
    width: "80%",
  },
  item: {
    fontSize: 12,
    marginBottom: 15,
    backgroundColor: "skyblue",
    padding: 5,
  },
  button: {
    width: "80%",
    borderTopWidth: 1,
    borderBottomColor: "#000",
    paddingTop: 15,
    position: "absolute",
    bottom: 15,
  },
  divider: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 25,
  },
});
