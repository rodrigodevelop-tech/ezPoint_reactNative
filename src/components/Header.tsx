import React,{useContext} from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
 } from 'react-native';
 import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import userImg from '../assets/capitao.png';
import fonts from '../styles/fonts';

import { AntDesign } from '@expo/vector-icons';
import {useAuth} from '../contexts/auth';

interface IHeader {
  dateStart : string
}

export function Header({dateStart }:IHeader){
  const { signed,signOut} = useAuth();

  function handleLogout(){
    signOut();
  }
  console.log(signed);
  return(
    <View style={styles.container}>

        <View>
          <Text style={styles.title}>Ponto de Hoje</Text>
          <Text style={styles.workedHours}>{dateStart}</Text>
        </View>
        <TouchableOpacity
            activeOpacity={0.70}
            onPress={handleLogout}
          >
          <AntDesign style={styles.icon} name="logout" size={20} color="black" />
        </TouchableOpacity>
        
      <View style={styles.logout} >
       <Image 
        source={userImg} 
        style={styles.image}
        resizeMode='contain'
      />
      </View>
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
    
  },
  perfilText:{
    flexDirection: 'row',
  },
  logout:{
    justifyContent:'center',
    alignItems:"center",
  },
  icon:{
   
  },
  infoSecundary: {
    marginLeft: 12
  },
  title:{
    fontSize: 25,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  workedHours:{
    fontSize: 25,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  image:{
    width: 80,
    height: 80,
    borderRadius: 80,
  }
})