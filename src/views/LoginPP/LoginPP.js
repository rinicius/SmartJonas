import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Switch,
  Alert,
} from "react-native";
import estiloLoginpp from "./estiloLoginpp";
import { AntDesign } from "@expo/vector-icons";

function LoginPP({ navigation }) {
  const [btnswitch, setBtnSwitch] = useState(false);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email == "") {
      if (senha == "") {
        console.log("foi");
        navigation.reset({
          index: 0,
          routes: [{ name: "Inicial" }],
        });
      }
    } else {
      console.log(email, senha);

      Alert.alert("Erro", "Login inválido", [{ text: "Ok", style: "cancel" }]);
    }
  };

  const btnSwitch = () => {
    if (!btnswitch) {
      setBtnSwitch(true);
    } else {
      setBtnSwitch(false);
    }
  };
  const voltar = () => {
    navigation.goBack();
  };

  return (
    <View style={estiloLoginpp.container2}>
      <ImageBackground
        source={require("../../../assets/bgcut.jpg")}
        style={estiloLoginpp.fundo}
        transition={false}
      >
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={voltar}
            style={{
              position: "relative",
              marginTop: "20%",
              flexDirection: "row",
            }}
          >
            <AntDesign style={{}} name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={estiloLoginpp.container1}>
          <Text style={estiloLoginpp.title}>Logar em sua conta</Text>

          <TextInput
            placeholder="Email"
            style={estiloLoginpp.textInput}
            onChangeText={(email) => setEmail(email)}
            value={email}
          ></TextInput>
          <TextInput
            secureTextEntry={true}
            placeholder="Senha"
            style={estiloLoginpp.textInput}
            onChangeText={(senha) => setSenha(senha)}
            value={senha}
          ></TextInput>

          <View
            style={{
              flexDirection: "column",
            }}
          >
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                position: "relative",
                left: 60,
              }}
            >
              <Text style={estiloLoginpp.switchText}>Lembre de mim</Text>
              <Switch
                style={estiloLoginpp.botaoSwitch}
                onValueChange={btnSwitch}
                value={btnswitch}
              />
            </View>
          </View>
          <TouchableOpacity
            style={estiloLoginpp.botaoLoginContainer}
            onPress={handleLogin}
          >
            <Text style={estiloLoginpp.botaoLoginTexto}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Text style={estiloLoginpp.text}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default LoginPP;
