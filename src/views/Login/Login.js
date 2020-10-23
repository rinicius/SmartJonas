import React from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import estiloLogin from "./estiloLogin";

function Login({ navigation }) {
  const gotoRegistrar = () => {
    navigation.navigate("Registrar");
  };

  const gotoLoginpp = () => {
    navigation.navigate("LoginPP");
  };

  return (
    <View style={estiloLogin.container1}>
      <ImageBackground
        source={require("../../../assets/bgcut.jpg")}
        style={estiloLogin.fundo}
        transition={false}
      >
        <Text style={estiloLogin.title}>JUNTE-SE</Text>
        <Text style={estiloLogin.text}>
          + de 10 milhões {"\n"} de usuários no mundo!
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              width: 125,
              borderBottomColor: "white",
              borderBottomWidth: 4,
              borderRadius: 100,
              position: "relative",
              top: 93,
            }}
          ></View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={estiloLogin.botaoLoginContainer}
            onPress={gotoLoginpp}
          >
            <Text style={estiloLogin.botaoLoginTexto}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={estiloLogin.botaoRegistrarContainer}
            onPress={gotoRegistrar}
          >
            <Text style={estiloLogin.botaoRegistrarTexto}>REGISTRE-SE</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Login;
