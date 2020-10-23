import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import estiloTreino from "./estiloTreino";
import { images, videos } from "../media/assets";
import { Video } from "expo-av";

export function ContainerTreino({ data }) {
  const [treino, setTreino] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePresser = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={estiloTreino.centeredView}>
          <View style={estiloTreino.modalView}>
            {/* <Text style={estiloTreino.modalText}>{treino.titulo}</Text> */}

            <Video
              source={videos[treino.video].uri}
              // source={{
              //   uri:
              //     "https://srv-file16.gofile.io/download/ghmjrH/PUXADA%20SUPINADA%20NA%20POLIA%20ALTA%20_%20EXERC%C3%8DCIO%20PARA%20COSTAS%20_%20PUXADA%20NA%20POLIA%20_%20JFIT%20PERSONAL%20TRAINER.mp4",
              // }}
              transition={false}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={{
                width: 300,
                height: 300,
                marginBottom: 15,
                borderRadius: 6,
                backgroundColor: "#e7e7e7",
              }}
            />
            {/* 
            <Image
              style={{ height: 300, width: 300, marginBottom: 20 }}
              resizeMode="contain"
              source={images[treino.imagem].uri}
            /> */}

            <TouchableOpacity
              style={{ ...estiloTreino.openButton, backgroundColor: "#000000" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={estiloTreino.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={handlePresser}>
        <View
          style={{
            marginBottom: 5,
            borderWidth: 0,
            minWidth: 350,
          }}
        >
          <View style={{ flexDirection: "row", padding: 5, paddingLeft: 10 }}>
            <Image
              style={{ height: 80, width: 80, borderRadius: 5 }}
              resizeMode="contain"
              transition={false}
              source={images[treino.imagem].uri}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={estiloTreino.titleTreino}>{treino.titulo}</Text>
              <Text style={estiloTreino.textTreino}>
                Séries: {treino.series}
              </Text>
              <Text style={estiloTreino.textTreino}>
                Repetições: {treino.repeticoes}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
