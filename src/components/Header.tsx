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

interface IHeader {
  dateStart : string
}

export function Header({dateStart }:IHeader){
  return(
    <View style={styles.container}>

        <View>
          <Text style={styles.title}>Ponto de Hoje</Text>
          <Text style={styles.workedHours}>{dateStart}</Text>
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