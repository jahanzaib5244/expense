import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import DrawerHome from '../../screens/home/DrawerHome';
import Add from '../../screens/add/Add';
import AddExpense from '../../screens/addexpense/AddExpense';
import TabNavigation from './TabNavigation';
import { editItem } from '../Store/actions/AuthAction';

export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator  >
        <Stack.Screen options={{headerShown:false}} name="Home1" component={TabNavigation}/>
        <Stack.Screen options={{headerShown:false}} name="AddExpense" component={AddExpense}/>
        <Stack.Screen options={{headerShown:false}} name="AddIncome" component={Add}/>
    </Stack.Navigator>
    )
}
