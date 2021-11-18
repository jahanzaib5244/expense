import React ,{useState} from 'react';
import { Provider } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';



import Store from './src/Store/Store'


import Navigationlogics from './src/navigation/Navigationlogics';
import { StatusBar } from 'react-native';




const App = () => {
 


   
    return (
       
        <Provider store={Store}>
            <StatusBar backgroundColor="#F1F2F7" barStyle='dark-content' />
             <MenuProvider >
            <Navigationlogics/>
            </MenuProvider>
        </Provider>

    );
};

export default App;