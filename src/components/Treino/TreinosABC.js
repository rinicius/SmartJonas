import React, { useState } from "react";
import { Text, View, Image, FlatList } from "react-native";
import estiloTreino from "./estiloTreino";
import { images } from "../Imagens/images";

export function ContainerTreino({ data }) {
  const [treino, setTreino] = useState(data);
  return (
    <View>
      <View
        style={{
          marginBottom: 5,
          borderWidth: 2,
          minWidth: 350,
        }}
      >
        <View style={{ flexDirection: "row", padding: 5, paddingLeft: 10 }}>
          <Image
            style={{ height: 80, width: 80 }}
            resizeMode="contain"
            source={images[treino.imagem].uri}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={estiloTreino.titleTreino}>{treino.titulo}</Text>
            <Text style={estiloTreino.textTreino}>Séries: {treino.series}</Text>
            <Text style={estiloTreino.textTreino}>
              Repetições: {treino.repeticoes}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
