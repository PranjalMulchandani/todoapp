import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { AddNewTodo } from "./src/screens/AddNewTodo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddNewTodo" component={AddNewTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
