import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import Rootscreen from '../navigation/Rootscreen';

import StackNavigation from './StackNavigator';
import { GetUser } from '../Store/actions/AuthAction';
import Splash from '../component/Splash';
import DrawerNavigation from './Drawer';


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};


export default function Navigationlogics() {
    
    
    const token = useSelector(state => state.AuthReducer.usertoken)
    const [loading, setloading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetUser(setloading)) 
    }, [])




    return (

        <NavigationContainer>

            {loading ? <View style={{flex:1}}><Splash/></View>  : token !== null ? <DrawerNavigation /> : <Rootscreen />}
        </NavigationContainer>

    )
}
