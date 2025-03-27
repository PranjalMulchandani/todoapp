import React from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const AddNewTodo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Todo</Text>
      <View style={styles.divider}></View>
      <View style={styles.txtContainer}>
        <Text style={styles.txtStyle}>Title</Text>
        <TextInput style={styles.inputStyle} placeholder="Title" />
        <Text style={styles.txtStyle}>Description</Text>
        <TextInput
          style={[styles.inputDesStyle]}
          placeholder="Description"
          multiline={true}
          numberOfLines={5}
        />
      </View>
      <View style={styles.button}>
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <View style={styles.btnContainer}>
            <Ionicons name="close-circle-sharp" size={20} color="green" />
            <Text style={styles.btnText}>Cancel</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("AddNewTodo")}>
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
