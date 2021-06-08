import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import { Dashboard } from '../pages/Dashboard';
import { MaterialIcons,MaterialCommunityIcons  } from '@expo/vector-icons';
import { PointInfo } from '../pages/PointInfo';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return( 
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.roxo,
        labelPosition: 'beside-icon',
        style: {
          backgroundColor: colors.heading,
          paddingVertical: 0,
          height:88
        },
      }}
    >
  
      <AppTab.Screen
        name="Tarefas"
        component={Dashboard}
        options={{
          tabBarIcon: (({size,color})=>(
            <MaterialIcons
            name="format-list-bulleted"
            size={size}
            color={color}
          />
          ))
        }}
      />
      <AppTab.Screen
        name="Meu ponto"
        component={PointInfo}
        options={{
          tabBarIcon: (({size,color})=>(
            <MaterialCommunityIcons name="account-clock" size={size} color={color}/>
          ))
        }}
      />

    </AppTab.Navigator>
  )
}

export default AuthRoutes;