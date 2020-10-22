import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginRoute from "./src/components/stackRoutes/loginRoute";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <LoginRoute />
    </NavigationContainer>
  );
}
