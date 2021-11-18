import React from 'react'
import { View, Text,Image } from 'react-native'
import LottieView from 'lottie-react-native';

export default function Splash() {
    return (
        <View style={{flex:1}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center' , backgroundColor:'#F1F2F7'}}>
            
             <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                 {/* <Image style={{height:90,width:90}} source={require("../assets/app_logo.png")}/> */}
                   <Text style={{color:'black',fontSize:22,fontWeight:'bold'}}>E X P E N S E</Text>
             </View>
           <View style={{flex:1.5,justifyContent:'center',alignItems:'center',paddingLeft:30}}>
           <LottieView
            source={require('../assets/logoAnimation.json')} 
            autoPlay loop
            style={{height:300,width:300}}
            />
               </View>
             <View style={{flex:0.6}}></View>
             <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
               <Image style={{height:50,width:50,marginBottom:10}} source={require('../assets/cgit.png')}/>
              
             </View>
             <Text style={{fontSize:13,color:'black',}}>Powered By </Text>
             <Text style={{fontSize:13,color:'black',marginBottom:'10%',}}>Convert Generation Information Technology</Text>
            </View>
            </View>
    )
}
