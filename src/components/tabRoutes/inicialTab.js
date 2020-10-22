import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Inicial from "../../views/Inicial/Inicial";
import Principal from "../../views/Principal/Principal";
import Dieta from "../../views/Dieta/Dieta";
import DrawerRoute from "../../components/drawerRoutes/drawerRoute";

const Tab = createMaterialTopTabNavigator();

const icones = {
  Inicial: { name: "home" },
  Colecao: { name: "storage" },
  Perfil: { name: "person" },
};

const TabRout = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicial"
      tabBarOptions={{
        labelStyle: { fontFamily: "Arial" },
        showLabel: true,
        style: { backgroundColor: "#FFF" },
        inactiveTintColor: "#b8b8b8",
      }}
    >
      <Tab.Screen
        name="Inicial"
        component={DrawerRoute}
        options={{
          unmountOnBlur: true,
          title: "Próximo Treino",
        }}
      />

      <Tab.Screen name="Principal" component={Principal} />
      <Tab.Screen name="Dieta" component={Dieta} />
    </Tab.Navigator>
  );
};

export default TabRout;
