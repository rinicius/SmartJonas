import React from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import estiloInicial from "./estiloInicial";

function Inicial({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontFamily: "Arial", fontWeight: "bold" }}>Inicial!</Text>
    </View>
  );
}

export default Inicial;
