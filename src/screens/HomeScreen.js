import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const HomeScreen = () => {
  const navigation = useNavigation();
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
        {/* <Button
          title="Add New Todo"
          onPress={() => navigation.navigate("AddNewTodo")}
        /> */}
        <Pressable onPress={() => navigation.navigate("AddNewTodo")}>
          <View style={styles.btnContainer}>
            <Ionicons name="add-circle-sharp" size={20} color="green" />
            <Text style={styles.btnText}>Add New Todo</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
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
  btnContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "skyblue",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  btnText: {
    color: "black",
    fontWeight: "bold",
  },
});
