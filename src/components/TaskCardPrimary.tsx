import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { RectButton,RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface TaskProps extends RectButtonProps {
  data: {
    title: string;
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
        <Text style={styles.text}>
          {data.title}
        </Text>

      </RectButton>
    )
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems : 'center',
    margin: 10,
  },
  text:{
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16
  }
})