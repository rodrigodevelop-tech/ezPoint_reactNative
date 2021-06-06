import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View, StyleSheet,
    SafeAreaView,
    Dimensions
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import homeofficeImg from '../assets/homeoffice.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';

export function TelaInicial() {
    const navigation = useNavigation();


    function handleStart() {
        navigation.navigate('UserIdentification');
    }


    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={[colors.azul_marinho, colors.cinza]}
                style={styles.linearGradientBackGround}
            >
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
                        <LinearGradient
                            colors={[colors.azul_black, colors.blue, colors.azul_black]}
                            style={styles.linearGradientButton}>
                            <Entypo
                                name="chevron-right"
                                style={styles.buttonIcon}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,

    },
    linearGradientBackGround: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 5
    },

    linearGradientButton: {
        flex: 1,
        paddingTop: 15,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 10
    },

    title: {
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
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonIcon: {
        fontSize: 25,
        color: colors.white
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    }
})