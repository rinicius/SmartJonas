import { StyleSheet } from "react-native";

const estiloLoginpp = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#002ba0",
  },
  title: {
    marginBottom: 10,
    fontSize: 26,
    color: "#FFFFFF",
    fontFamily: "Trebuchet MS",
    // top: 90,
  },
  textInput: {
    backgroundColor: "white",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 12,
    borderRadius: 5,
    height: 50,
    width: 300,
    paddingLeft: 10,
    fontWeight: "bold",
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
  botaoLoginContainer: {
    zIndex: 1,
    marginTop: 20,
    position: "relative",
    height: 65,
    width: 220,
    backgroundColor: "#5667ff",
    borderWidth: 5,
    borderColor: "#5667ff",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoLoginTexto: {
    fontFamily: "Trebuchet MS",
    fontSize: 23,
    color: "#FFF",
  },
  text: {
    fontFamily: "Trebuchet MS",
    marginTop: 25,
    color: "#FFF",
    fontSize: 15,
  },
});

export default estiloLoginpp;
