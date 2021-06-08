import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface CategoryButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function CategoryButton({
  title,
  active = false,
  ...rest
} :  CategoryButtonProps){
  return(
    <RectButton 
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.text,
        active && styles.textActive
        ]}>
        {title}
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.shape,
    width: 200,
    height: 40,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 15,
    marginRight: 7,
  },
  containerActive:{
    backgroundColor: colors.green_light 
  },
  text:{
    color: colors.black,
    fontFamily: fonts.text
  },
  textActive: {
    color: colors.black,
    fontFamily: fonts.heading
  }
})