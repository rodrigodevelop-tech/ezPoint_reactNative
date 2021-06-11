import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { RectButton,RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


interface TaskProps extends RectButtonProps {
  data: {
    title: string;
    DateFinal: string;
  }
}

export function TaskCardPrimary({
  data, 
  ...rest
}: TaskProps){

    return(
      <RectButton
        style={styles.container}
        {...rest}
      >
        <View style={styles.card}>
          <AntDesign name="minus" size={20} color="black" />
          <Text style={styles.text}> 
            {data.title}
          </Text>
        </View>

        <View style={styles.card}> 
          <Ionicons name="time-outline" size={20} color="black" />
          <Text style={styles.text}>
            15/06/2021
          </Text>
        </View>
        

      </RectButton>
    )
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    maxWidth: '100%',
    // flexDirection: 'row',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 12,
    // alignItems : 'center',
    margin: 10,
    width: 325,
    height: 88,
  },
  card:{
    flexDirection: 'row',
    alignItems : 'center',
    paddingHorizontal: 15
  },
  text:{
    color: colors.heading,
    fontFamily: fonts.heading,
    marginLeft: 5,
    marginVertical: 5
  },
  
})