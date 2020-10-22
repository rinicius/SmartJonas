import { StyleSheet } from "react-native";

const estiloRegistrar = StyleSheet.create({
  container1: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#002ba0",
  },
  fundo: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  textInput: {
    backgroundColor: "white",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 12,
    borderRadius: 100,
    height: 45,
    width: 300,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 10,
    fontSize: 26,
    color: "#FFFFFF",
    fontFamily: "Trebuchet MS",
    // top: 90,
  },
  botaoSwitch: {
    transform: [{ scaleX: 1.25 }, { scaleY: 1.25 }],
    position: "relative",
  },
  switchText: {
    fontFamily: "Trebuchet MS",
    fontSize: 15,
    color: "#FFF",
    marginEnd: 20,
    marginTop: 5,
  },
  botaoRegistrarContainer: {
    zIndex: 1,
    marginTop: 25,
    position: "relative",
    height: 65,
    width: 220,
    borderWidth: 5,
    borderColor: "#5667ff",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoRegistrarTexto: {
    fontFamily: "Trebuchet MS",
    fontSize: 23,
    color: "#5667ff",
  },
});

export default estiloRegistrar;
