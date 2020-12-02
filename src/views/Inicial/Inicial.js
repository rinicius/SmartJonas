import React, { useState } from "react";
import { Text, View, TouchableOpacity, Animated, FlatList } from "react-native";
import estiloInicial from "./estiloInicial";
import { ListaTreinos } from "../../components/Treino/ListaTreinos";
import { AntDesign } from "@expo/vector-icons";

function Inicial({ navigation }) {
  const [objTreinos, setTreinos] = useState([
    {
      letra: "A",
      partes: "Braço e Perna",
    },
    {
      letra: "B",
      partes: "Braços e ABS",
    },
    {
      letra: "C",
      partes: "Pernas, Peitoral e ABS",
    },
  ]);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <View style={{ marginTop: "5%" }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={objTreinos}
          keyExtractor={(item) => item.letra}
          renderItem={({ item }) => (
            <ListaTreinos data={item} treinoLetra={item.letra} />
          )}
        />
      </View>
    </View>
  );
}

export default Inicial;
