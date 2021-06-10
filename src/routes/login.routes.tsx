import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../styles/colors";

import { TelaInicial } from "../pages/TelaInicial";
import { UserIdentification } from "../pages/UserIdentification";
import { Company } from "../pages/Company";
import { Confirmation } from "../pages/Confirmation";
import { UserRegister } from "../pages/UserRegister";
import { UserLogin } from "../pages/UserLogin";

const stackRoutes = createStackNavigator();

const LoginRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="UserLogin" component={UserLogin} />
  </stackRoutes.Navigator>
);

export default LoginRoutes;
