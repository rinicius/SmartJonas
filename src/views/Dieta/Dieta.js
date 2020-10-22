import React from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import estiloDieta from "./estiloDieta";

function Dieta({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontFamily: "Arial", fontWeight: "bold" }}>Dieta!</Text>
    </View>
  );
}

export default Dieta;
