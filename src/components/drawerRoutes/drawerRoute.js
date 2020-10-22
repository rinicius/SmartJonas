import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Inicial from "../../views/Inicial/Inicial";
import Principal from "../../views/Principal/Principal";
import Dieta from "../../views/Dieta/Dieta";
import Login from "../../components/stackRoutes/loginRoute";

const Drawer = createDrawerNavigator();

const DrawerRoute = () => {
  return (
    <Drawer.Navigator initialRouteName="Treino">
      <Drawer.Screen name="Treino" component={Inicial} />
      <Drawer.Screen name="Principal" component={Principal} />
      <Drawer.Screen name="Dieta" component={Dieta} />
    </Drawer.Navigator>
  );
};

export default DrawerRoute;
