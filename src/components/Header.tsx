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

       <Image 
        source={userImg} 
        style={styles.image}
        resizeMode='contain'
      />

      <View style={styles.perfilText}>

        <View>
          <Text style={styles.title}>Horário de trabalho</Text>
          <Text style={styles.workedHours}>08:00h até 17:00h</Text>
        </View>  

        <View style={styles.infoSecundary}>
          <Text style={styles.title}>Inicio de hoje</Text>
          <Text style={styles.workedHours}>07:57 AM</Text>
        </View>

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
  infoSecundary: {
    marginLeft: 15
  },
  title:{
    fontSize: 15,
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  workedHours:{
    fontSize: 15,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  image:{
    width: 70,
    height: 70,
    borderRadius: 70,
    // backgroundColor: 'red'
  }
})