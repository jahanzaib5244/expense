import React from 'react'
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch ,useSelector} from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { dologout } from '../Store/actions/AuthAction';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
export default function Drawercontent(props) {
    const user = useSelector(state => state.AuthReducer.userData)
    const dispatch = useDispatch()
    const logout=()=>{
        dispatch(dologout())
    }
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../assets/applogo.png')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                {/* <Title style={styles.title}>{user.name}</Title> */}
                                {/* <Caption style={styles.caption}>{user.email}</Caption> */}
                            </View>
                        </View>

                      
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons name='home-outline' size={size} color={color} />
                                
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home1')}}
                            activeTintColor={COLORS.white}
                            activeBackgroundColor={COLORS.primary}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons  name='stats-chart-sharp' size={size} color={color} />
                            )}
                            label="Chart"
                            onPress={() => {props.navigation.navigate('Chart')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons name='calendar-blank-outline' size={25} color={color} />
                               
                            )}
                            label="Search"
                            onPress={() => {props.navigation.navigate('Search')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                name="lock-open" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Update Password"
                            onPress={() => {props.navigation.navigate('Update Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome name='gear' size={size} color={color} />
                            )}
                            label="Setting"
                            onPress={() => {props.navigation.navigate('Setting')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                name="help-circle-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Help"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                   
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialCommunityIcons
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={()=>logout()}
                />
            </Drawer.Section>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

