import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';



import Drawercontent from './DrawerContent';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import { Home } from '../../screens';
import StackNavigation from './StackNavigator';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator Options={{
      
      drawerActiveTintColor: COLORS.white,
      drawerActiveBackgroundColor: COLORS.primary,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: COLORS.primary,
      },
    }} drawerContent={props => <Drawercontent {...props} />}  >
      <Drawer.Screen options={{ headerShown: false }} name="Home" component={StackNavigation} />
      <Drawer.Screen options={{ headerShown: false }} name="logout" component={Home} />
      {/* <Drawer.Screen options={{

        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: COLORS.primary,
        }
      }}
        name="Update Profile" component={UpdateProfile}
      />
      <Drawer.Screen
        options={{

          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: COLORS.primary,
          }
        }}
        name="Update Password" component={UpdatePassword}
      /> */}
    </Drawer.Navigator>
  );
}