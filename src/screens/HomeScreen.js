import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HomeScreen = () => {
  const navigation = useNavigation();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("todos");
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error("Error loading todos", error);
      }
    };

    loadTodos();
  }, []);
  const saveTodos = async (newTodos) => {
    try {
      await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
    } catch (error) {
      console.error("Error saving todos", error);
    }
  };
  const deleteTodo = async (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    await saveTodos(newTodos);
  };
  const finishTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, finished: true };
      }
      return todo;
    });
    setTodos(newTodos);
    saveTodos(newTodos);
  };
  const expandTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, expanded: !todo.expanded };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <View style={styles.divider}></View>
      <View style={styles.list}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <View style={styles.listTopContainer}>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Pressable onPress={expandTodo.bind(this, item.id)}>
                  <Ionicons
                    name={item.expanded ? "caret-up" : "caret-down"}
                    size={20}
                    color="green"
                  />
                </Pressable>
              </View>
              {item.expanded && (
                <View style={styles.expanded}>
                  <Text style={styles.listDescription}>{item.description}</Text>
                  <View style={styles.listActions}>
                    {!item.finished && (
                      <Pressable onPress={finishTodo.bind(this, item.id)}>
                        <Ionicons name="cloud-done" size={20} color="green" />
                      </Pressable>
                    )}
                    <Pressable onPress={deleteTodo.bind(this, item.id)}>
                      <Ionicons name="trash" size={20} color="red" />
                    </Pressable>
                  </View>
                </View>
              )}
            </View>
          )}
        />
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
    borderBottomColor: "black",
    paddingTop: 15,
    position: "absolute",
    bottom: 15,
  },
  divider: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
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
  listContainer: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "skyblue",
    marginVertical: 10,
  },
  listTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listTitle: {
    fontSize: 14,
  },
  listDescription: {
    fontSize: 14,
    color: "black",
  },
  listActions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  list: {
    width: "80%",
    flexGrow: 1,
    height: 60,
    marginBottom: 100,
  },
});
