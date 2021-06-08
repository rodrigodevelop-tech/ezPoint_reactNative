import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
// import { pointSave } from '../libs/storage';



export function PointInfo() {
    const navigation = useNavigation();
    const [start,setStart]  = useState("");

    const data = new Date();
    let hora    = data.getHours();          
    let min     = data.getMinutes();       
    let seg     = data.getSeconds();     
    

    async function handleConfirmation() {
      try{  
        const str_hora = hora + ':' + min + ':' + seg+ 'h';

        if(!start)
          setStart(str_hora)
        else 
          return Alert.alert('Ponto já foi iniciado!');

        await AsyncStorage.setItem('@startJob:dateStart',start);      

      }catch(err){
        throw new Error(err);
      }

        navigation.navigate('Dashboard');
    }

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={[colors.gradient_roxo_1, colors.gradient_roxo_2,colors.gradient_roxo_3]}
                style={styles.linearGradientBackGround}
            >
                <View style={styles.content}>

                    <Text style={styles.emoji}>
                        😃
                </Text>

                    <Text style={styles.title}>
                        Mais um dia de trabalho!
                </Text>

                    <Text style={styles.subTitle}>
                        Clique para bater {'\n'}
                        o ponto de hoje!
                    </Text>

                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.70}
                            onPress={handleConfirmation}
                        >
                            <LinearGradient
                                colors={[colors.azul_black, colors.blue, colors.azul_black]}
                                style={styles.gradientButton}>
                                <Text
                                    style={styles.confirmText}
                                >
                                  {
                                  start ? start : 'Começar'
                                  }
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </View>

            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    emoji: {
        fontSize: 78,
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subTitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 20,
        color: colors.heading
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        height: 56,
        width: 200
    },

    linearGradientBackGround: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 5
    },

    confirmText: {
        fontSize: 20,
        fontFamily: fonts.text,
        color: 'white',
        marginTop: 13
    },

    gradientButton: {
        flex: 1,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 10
    },

})