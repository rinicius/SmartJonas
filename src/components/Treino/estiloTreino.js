import { StyleSheet } from "react-native";

const estiloTreino = StyleSheet.create({
  titleTreino: {
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: "500",
    marginTop: 0,
    marginLeft: 10,
    color: "#4f4f4f",
  },
  textTreino: {
    color: "#869099",
    fontWeight: "400",
    fontSize: 14,
    fontFamily: "Arial",
    marginLeft: 10,
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#000000",
    minWidth: 90,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 100,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 25,
    width: 320,
    marginBottom: 15,
    textAlign: "center",
  },
});

export default estiloTreino;
