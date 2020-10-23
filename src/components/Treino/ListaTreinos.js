import React, { useState } from "react";
import { Text, View, TouchableOpacity, Animated, FlatList } from "react-native";
import { ContainerTreino } from "./TreinosABC";
import { AntDesign } from "@expo/vector-icons";
import estiloLista from "./estiloLista";

export function ListaTreinos({ data }) {
  const [isOpen, setOpen] = useState(false);
  const [rotacao, setRotacao] = useState(new Animated.Value(0));
  const [treino, setTreino] = useState(data);
  const [objTreinos, setTreinos] = useState([
    {
      titulo: "Puxada polia barra supinada",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino1",
    },
    {
      titulo: "sla treino 2",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino2",
    },
    {
      titulo: "sla treino 3",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino3",
    },
    {
      titulo: "sla treino 4",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino4",
    },
    {
      titulo: "sla treino 5",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino4",
    },
    {
      titulo: "sla treino 6",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino4",
    },
    {
      titulo: "sla treino 7",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino4",
    },
  ]);
  const abrirTreino = () => {
    setOpen(!isOpen);

    Animated.timing(rotacao, {
      toValue: isOpen ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const giro = rotacao.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <TouchableOpacity activeOpacity={0.5} onPress={abrirTreino}>
        <View style={{ borderWidth: 2, borderRadius: 100, marginBottom: 10 }}>
          <View style={{ flexDirection: "row", padding: 8, minWidth: 330 }}>
            <View style={estiloLista.treinoContainer}>
              <Text
                style={{
                  marginLeft: "21%",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  fontSize: 40,
                }}
              >
                {treino.letra}
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={estiloLista.titleTreino}>
                Treino {treino.letra}!
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Arial",
                  marginTop: 5,
                  marginLeft: 12,
                }}
              >
                {treino.partes}
              </Text>
            </View>
            <View style={{ marginTop: 15, marginLeft: 9 }}>
              <Animated.View style={{ transform: [{ rotate: giro }] }}>
                <AntDesign name="up" size={24} color="black" />
              </Animated.View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {isOpen && (
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.titulo}
          data={objTreinos}
          renderItem={({ item }) => <ContainerTreino data={item} />}
        />
      )}
    </View>
  );
}
