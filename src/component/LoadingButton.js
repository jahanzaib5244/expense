import React from 'react'
import {StyleSheet, ActivityIndicator ,View  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
export default function LoadingButton() {
    return (
        <View
                     
                        style={styles.signIn}
                    ><LinearGradient
                        colors={[COLORS.primary, COLORS.secondary]}
                        style={styles.signIn}
                    >
                           <ActivityIndicator  size="small" color="white"/>
                        </LinearGradient>
                    </View>
    )
}


const styles = StyleSheet.create({
    textSign:{
        fontSize: 18,
    fontWeight: 'bold',
    color:COLORS.primary
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
})