import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AddNewTodo = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleHandler = (text) => {
    setTitle(text);
  };
  const descriptionHandler = (text) => {
    setDescription(text);
  };
  const clear = () => {
    setTitle("");
    setDescription("");
  };
  const saveTodo = async (todo) => {
    try {
      const todos = await AsyncStorage.getItem("todos");
      let newTodos = [];
      if (todos) {
        newTodos = JSON.parse(todos);
      }
      newTodos.push(todo);
      await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
      Alert.alert("Todo Added Successfully.");
      clear();
    } catch (error) {
      Alert.alert("Error saving todo", error.message);
    }
  };
  const saveHandler = () => {
    if (title.trim() === "" || description.trim() === "") {
      Alert.alert(
        "Both fields must not be empty for the todo to be successfully added."
      );
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      title: title,
      description: description,
      finished: false,
      expanded: false,
    };
    saveTodo(newTodo);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Todo</Text>
      <View style={styles.divider}></View>
      <View style={styles.txtContainer}>
        <Text style={styles.txtStyle}>Title</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Title"
          value={title}
          onChangeText={titleHandler}
        />
        <Text style={styles.txtStyle}>Description</Text>
        <TextInput
          style={[styles.inputDesStyle]}
          placeholder="Description"
          multiline={true}
          numberOfLines={5}
          value={description}
          onChangeText={descriptionHandler}
        />
      </View>
      <View style={styles.button}>
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <View style={styles.btnContainer}>
            <Ionicons name="close-circle-sharp" size={20} color="green" />
            <Text style={styles.btnText}>Back</Text>
          </View>
        </Pressable>
        <Pressable onPress={saveHandler}>
          <View style={styles.btnContainer}>
            <Ionicons name="save-sharp" size={20} color="green" />
            <Text style={styles.btnText}>Save</Text>
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
  },
  title: {
    fontSize: 24,
    marginTop: 45,
    marginBottom: 25,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
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
  inputStyle: {
    height: 40,
    borderColor: "gray",
    color: "black",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputDesStyle: {
    height: 140,
    borderColor: "gray",
    color: "black",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: "top",
  },
  txtContainer: {
    width: "80%",
    gap: 3,
  },
  txtStyle: {
    fontSize: 16,
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
});
