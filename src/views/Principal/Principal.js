import React from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import estiloPrincipal from "./estiloPrincipal";

function Principal({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontFamily: "Arial", fontWeight: "bold" }}>
        Principal!
      </Text>
    </View>
  );
}

export default Principal;
