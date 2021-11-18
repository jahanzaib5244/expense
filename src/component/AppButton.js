import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
export default function AppButton({onPress,name}) {
    return (
        <TouchableOpacity
                      onPress={onPress}
                        style={styles.signIn}
                    ><LinearGradient
                        colors={['#3A3EBF', '#3A3EBF']}
                        style={styles.signIn}
                    >
                            <Text style={styles.textSign}
                            >{name}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    textSign:{
        fontSize: 18,
    fontWeight: 'bold',
    color:COLORS.white
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
})


