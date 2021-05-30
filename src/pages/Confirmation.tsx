import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';



export function Confirmation(){
    const navigation = useNavigation();


    function handleConfirmation(){
        navigation.navigate('UserLogin');
    }
    
    return(
       <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.emoji}>
                    😃
                </Text>

                <Text style={styles.title}>
                    Finalizado
                </Text>

                <Text style={styles.subTitle}>
                    Agora vamos começar a {'\n'}
                    organizar suas tarefas. 
                </Text>

                <View style={styles.footer}>
                    <Button
                        title="Finalizar"
                        onPress={handleConfirmation}
                    />
                </View>

           </View>

           
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
        flex:1,
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
    subTitle:{
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical:20,
        color: colors.heading
    },
    footer: {
        width: '100%',
        paddingHorizontal:50,
        marginTop: 20
    },

})