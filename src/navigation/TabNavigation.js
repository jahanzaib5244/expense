import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';




import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import DrawerHome from '../../screens/home/DrawerHome';
import Home from '../../screens/Home';
import Addincome from '../../screens/add incom/Addincome';
import Search from '../../screens/Search/Search';
import Setting from '../../screens/setting/Setting';
import EditItem from '../../screens/edit/EditItem'
import EditExpense from '../../screens/edit/EditExpense'

const HomeStack = createStackNavigator();
const AddStack = createStackNavigator();

export default function TabNavigation({ navigation }) {
   

    

    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.black,
                tabBarInactiveTintColor: COLORS.gray,
                tabBarHideOnKeyboard: true,
                tabBarInactiveBackgroundColor: COLORS.white,
                tabBarActiveBackgroundColor: COLORS.white,
              
                tabBarStyle: { position: 'absolute', backgroundColor: COLORS.white, elevation: 0, borderTopWidth: 0, height: 70, paddingBottom: 18, paddingTop: 0, },
            })}>
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name='home-outline' size={25} color={color} />
                    )
                }} name="Homestack" component={HomeStackScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons  name='stats-chart-sharp' size={25} color={color} />
                    )
                }}
                name="Chart" component={Home} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{position:'absolute',backgroundColor:'#3A3EBF',height:55,width:55,alignItems:'center',justifyContent:'center',bottom:10,borderRadius:55/2}}>
                            <Ionicons name='add' size={35} color={COLORS.white} />
                        </View>

                    )
                }} name="Add" component={AddStackScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons name='calendar-blank-outline' size={25} color={color} />
                    )
                }} name="Search" component={Search} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesome name='gear' size={25} color={color} />
                    )
                }} name="Setting" component={Setting} />
        </Tab.Navigator>
    );
}


const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{ headerShown: false }} >
      <HomeStack.Screen   name="homeStack" component={DrawerHome} />
      <HomeStack.Screen   name="edit" component={EditItem} />
      <HomeStack.Screen   name="editexpense" component={EditExpense} />
    </HomeStack.Navigator>
  );
const AddStackScreen = ({ navigation }) => (
    <AddStack.Navigator screenOptions={{ headerShown: false }} >
      <AddStack.Screen   name="AddStack" component={Addincome} />
      <AddStack.Screen   name="edit" component={EditItem} />
      <AddStack.Screen   name="editexpense" component={EditExpense} />
    </AddStack.Navigator>
  );