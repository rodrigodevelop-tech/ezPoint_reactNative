import React from 'react';
import { 
    Image, 
    Text, 
    TouchableOpacity, 
    View,StyleSheet, 
    SafeAreaView,
    Dimensions
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import homeofficeImg from '../assets/homeoffice.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function TelaInicial(){
    const navigation = useNavigation();


    function handleStart(){
        navigation.navigate('UserIdentification');
    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                Gerencie {'\n'} 
                seu trabalho {'\n'}
                de forma fácil
                </Text>

                <Image 
                    source={homeofficeImg} 
                    style={styles.image}
                    resizeMode='contain'
                />

                <Text style={styles.subTitle}>
                Registre seu ponto e
                organize suas atividades.
                Seu trabalho vai render como nunca.
                </Text>

                <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.70}
                    onPress={handleStart}
                >

                <Entypo 
                    name="chevron-right"
                    style={styles.buttonIcon}
                />   
    
                </TouchableOpacity>    
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
    },
    wrapper: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title:{
        fontFamily: fonts.heading,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.azul_black,
        marginTop: 50,
        lineHeight: 38
    },
    subTitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.azul_black
    },
    button: {
        backgroundColor: colors.roxo,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height:56,
        width: 56
    },
    buttonIcon: {
        fontSize: 25,
        color: colors.white
    },
    image: {
        height:Dimensions.get('window').width * 0.7
    }
})