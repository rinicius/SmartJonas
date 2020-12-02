import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Animated, FlatList } from "react-native";
import { ContainerTreino } from "./TreinosABC";
import { AntDesign } from "@expo/vector-icons";
import estiloLista from "./estiloLista";

export function ListaTreinos({ data, treinoLetra }) {
  const [letra, setLetra] = useState(treinoLetra);
  const [isOpen, setOpen] = useState(false);
  const [rotacao, setRotacao] = useState(new Animated.Value(0));
  const [treino, setTreino] = useState(data);
  const [Iniciante, setTreinos] = useState([
    {
      titulo: "Treino de braços iniciante",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino1",
      video: "treino21",
    },
    {
      titulo: "Treino de pernas iniciante",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino2",
      video: "treino12",
    },
    {
      titulo: "Puxada Polia",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino2",
      video: "treino11",
    },
  ]);
  const [Intermediario, setIntermediario] = useState([
    {
      titulo: "Treino ABS Intermediário",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino1",
      video: "treino22",
    },
    {
      titulo: "Treino Braço Intermediário",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino2",
      video: "treino31",
    },
    {
      titulo: "Treino Perna Intermediário",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino3",
      video: "treino32",
    },
  ]);
  const [Avancado, setAvancado] = useState([
    {
      titulo: "Treino ABS Avançado",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino1",
      video: "treino41",
    },
    {
      titulo: "Treino ABS Avançado 2",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino2",
      video: "treino42",
    },
    {
      titulo: "Treino Perna Avançado",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino3",
      video: "treino43",
    },
    {
      titulo: "Treino Parte Superior Avançado",
      series: "3",
      repeticoes: "de 10 a 12",
      imagem: "treino4",
      video: "treino44",
    },
  ]);

  const [treinoSelecionado, setTreinoSelecionado] = useState(() => {
    if (letra === "A") {
      return Iniciante;
    } else if (letra === "B") {
      return Intermediario;
    } else if (letra === "C") {
      return Avancado;
    }
  });

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
        <View style={{ borderWidth: 3, borderRadius: 50, marginBottom: 10 }}>
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
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.titulo}
          data={treinoSelecionado}
          renderItem={({ item }) => <ContainerTreino data={item} />}
        />
      )}
    </View>
  );
}
