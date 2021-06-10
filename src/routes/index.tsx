import React,{useContext}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {  View,ActivityIndicator  } from 'react-native';

import StackRoutes from './stack.routes';
import LoginRoutes from './login.routes';

import {useAuth} from '../contexts/auth';


const Routes = () => {
    const { signed,loading } = useAuth();

    if(loading){
        return(
            <View style = {{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#999"/>
            </View>
        )
    }
    
    return(
        signed ? <StackRoutes/> : <LoginRoutes/> 
    )
}

export default Routes;