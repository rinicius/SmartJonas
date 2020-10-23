import React, { useState } from "react";
import { Text, View, TouchableOpacity, Animated, FlatList } from "react-native";
import estiloInicial from "./estiloInicial";
import { ListaTreinos } from "../../components/Treino/ListaTreinos";
import { AntDesign } from "@expo/vector-icons";

function Inicial({ navigation }) {
  const [objTreinos, setTreinos] = useState([
    {
      letra: "A",
      partes: "Peitoral, Tríceps, Funcionais",
    },
    {
      letra: "B",
      partes: "csgo, lol e val",
    },
  ]);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <View style={{ marginTop: "5%" }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.Letra}
          data={objTreinos}
          renderItem={({ item }) => <ListaTreinos data={item} />}
        />
      </View>
    </View>
  );
}

export default Inicial;
