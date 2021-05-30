import React from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
 } from 'react-native';
 import { getStatusBarHeight } from 'react-native-iphone-x-helper';

 import colors from '../styles/colors';
import userImg from '../assets/capitao.png';
import fonts from '../styles/fonts';


export function Header(){
  return(
    <View style={styles.container}>
      <View style={styles.perfilText}>
        <Text style={styles.greeting}>Horário de trabalho</Text>
        <Text style={styles.userName}>08:00 até 17:00</Text>

        <Text style={styles.greeting}>Inicio de hoje</Text>
        <Text style={styles.userName}>07:57 AM</Text>
      </View>
      <Image 
        source={userImg} 
        style={styles.image}
        resizeMode='contain'
      />
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
    justifyContent:'space-between'
  },
  greeting:{
    fontSize: 10,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName:{
    fontSize: 10,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  image:{
    width: 80,
    height: 80,
    borderRadius: 70
  }
})