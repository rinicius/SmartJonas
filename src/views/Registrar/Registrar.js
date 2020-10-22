import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Switch,
  ImageBackground,
} from "react-native";
import estiloRegistrar from "./estiloRegistrar";
import { AntDesign } from "@expo/vector-icons";

function Registrar({ navigation }) {
  const [btnswitch, setBtnSwitch] = useState(false);

  const voltar = () => {
    navigation.goBack();
  };
  const btnSwitch = () => {
    if (!btnswitch) {
      setBtnSwitch(true);
    } else {
      setBtnSwitch(false);
    }
  };

  return (
    <View style={estiloRegistrar.container2}>
      <ImageBackground
        source={require("../../../assets/bgcut.jpg")}
        style={estiloRegistrar.fundo}
      >
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={voltar}
            style={{
              position: "relative",
              marginRight: "80%",
              marginTop: "6%",
            }}
          >
            <AntDesign style={{}} name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={estiloRegistrar.title}>Crie sua conta</Text>
        </View>

        <View style={estiloRegistrar.container1}>
          <TextInput
            placeholder="Digite seu email"
            style={estiloRegistrar.textInput}
          ></TextInput>
          <TextInput
            placeholder="Repita seu email"
            style={estiloRegistrar.textInput}
          ></TextInput>
          <TextInput
            placeholder="Digite sua senha"
            style={estiloRegistrar.textInput}
          ></TextInput>
          <TextInput
            placeholder="Repita sua senha"
            style={estiloRegistrar.textInput}
          ></TextInput>
          <TextInput
            placeholder="Digite seu CPF"
            style={estiloRegistrar.textInput}
          ></TextInput>
          <TextInput
            placeholder="Selecione seu sexo"
            style={estiloRegistrar.textInput}
          ></TextInput>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <View
              style={{
                marginTop: 25,
                flexDirection: "row",
                position: "relative",
                left: 70,
              }}
            >
              <Text style={estiloRegistrar.switchText}>Aceito os termos</Text>
              <Switch
                style={estiloRegistrar.botaoSwitch}
                onValueChange={btnSwitch}
                value={btnswitch}
              />
            </View>
          </View>
          <TouchableOpacity style={estiloRegistrar.botaoRegistrarContainer}>
            <Text style={estiloRegistrar.botaoRegistrarTexto}>REGISTRAR</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Registrar;
