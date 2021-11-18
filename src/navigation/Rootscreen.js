import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import Login from '../../screens/login/Login';

export default function RootStack() {
    const RootStack = createStackNavigator();
    return (
        <RootStack.Navigator  >
        <RootStack.Screen options={{headerShown:false}} name="login" component={Login}/>
    </RootStack.Navigator>
    )
}
