import React from "react";
import Login from "../../views/Login/Login";
import Registrar from "../../views/Registrar/Registrar";
import LoginPP from "../../views/LoginPP/LoginPP";
import inicialTab from "../../components/tabRoutes/inicialTab";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        style={{ width: 30, height: 30 }}
        source={require("../../../assets/halter.png")}
      />

      <Text
        style={{ fontFamily: "Trebuchet MS", fontSize: 24, marginLeft: 10 }}
      >
        {" "}
        Bom dia, aluno!{" "}
      </Text>
    </View>
  );
}

const loginRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Registrar"
        component={Registrar}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="LoginPP"
        component={LoginPP}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Inicial"
        component={inicialTab}
        options={{
          headerLeft: null,
          title: "Bom dia, aluno!",
          headerTintColor: "black",
          headerTitleStyle: {
            fontFamily: "Trebuchet MS",
            fontWeight: "bold",
            fontSize: 24,
          },
          headerStyle: {
            backgroundColor: "#FFF",
            height: 70,
          },
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};
export default loginRoute;
