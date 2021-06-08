import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../styles/colors";

import { TelaInicial } from "../pages/TelaInicial";
import { UserIdentification } from "../pages/UserIdentification";
import { Company } from "../pages/Company";
import { Confirmation } from "../pages/Confirmation";
import { UserRegister } from "../pages/UserRegister";
import { UserLogin } from "../pages/UserLogin";
import { Dashboard } from "../pages/Dashboard";
import { CreateTask } from "../pages/CreateTask";
import { TaskSelected } from "../pages/TaskSelected";
import { PointInfo } from "../pages/PointInfo";
import AuthRoutes from "./Tab.routes";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={TelaInicial} />
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <stackRoutes.Screen name="CompanyIdentification" component={Company} />
    <stackRoutes.Screen name="UserRegister" component={UserRegister} />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
    <stackRoutes.Screen name="UserLogin" component={UserLogin} />
    <stackRoutes.Screen name="Dashboard" component={AuthRoutes} />
    <stackRoutes.Screen name="PointInfo" component={PointInfo} />
    <stackRoutes.Screen name="CreateTask" component={CreateTask} />
    <stackRoutes.Screen name="Taskselected" component={TaskSelected} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
