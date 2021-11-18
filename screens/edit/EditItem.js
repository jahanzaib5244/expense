
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AppButton from '../../src/component/AppButton'
import { useDispatch } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePickerModal from "react-native-modal-datetime-picker";


import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import { editIncomeItem } from '../../src/Store/actions/AuthAction';
import LoadingButton from '../../src/component/LoadingButton';



export default function EditItem({route, navigation }) {
    const dispatch = useDispatch()
    
    const { item } = route.params;
    const month = ['index', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const [showdatepicker, setshowdatepicker] = useState(false)
    
   
  
    console.log(item)
    const [getyear, setgetyear] = useState('')
    const [getmonth, setgetmonth] = useState('')
    const [getdate, setgetdate] = useState('')
    const [title, settitle] = useState('')
    const [amount, setamount] = useState('')
    const [comment, setcomment] = useState('')
    const [loading, setloading] = useState(false)
    
    useEffect(() => {
        setgetdate(item.add_date.slice(0, 2))
        setgetmonth(month.indexOf(item.add_date.slice(3, 6)))
        setgetyear(item.add_date.slice(7, 11))
        console.log(item.add_date.slice(7, 11))
        settitle(item.name)
        setamount(item.amount)
        setcomment(item.comment)
    }, [])

    const onConfirmDate = (date) => {
    console.log(date)
       setgetyear( date.getFullYear())
        const dateString = JSON.stringify(date)
        setgetmonth((dateString.slice(6, 8)));
        setgetdate(date.getDate())
        hideDatePicker();
    };
    const hideDatePicker = () => {
        setshowdatepicker(false)
    }
    const doEditItem=()=>{
        dispatch(editIncomeItem(setloading,item.id,getyear,getmonth,getdate,title,amount,comment))
    }
    return (
        <ScrollView style={{flex:1}} >
            <View >
                <View style={{ flexDirection: 'row', alignItems: 'space-between', paddingHorizontal: 25, justifyContent: 'space-between', paddingTop: 20 }}>
                    {/* <TouchableOpacity onPress={() => navigation.goBack()}> <Fontisto name='arrow-left-l' color="black" size={20} /> </TouchableOpacity> */}
                    <Text style={{ fontSize: 22, color: 'black' }}>Edit Income</Text>
                    <Image style={{ width: 30, height: 30 }} source={require('../../src/assets/avtar.png')} />
                </View>
                <View style={{ flexDirection: 'row', marginVertical: SIZES.padding, alignItems: 'center', paddingHorizontal: 30 }}>
                    <TouchableOpacity
                        onPress={() => setshowdatepicker(true)}
                        style={{
                            backgroundColor: COLORS.white,
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </TouchableOpacity>

                    <View style={{ marginLeft: SIZES.padding }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>{getdate} {month[getmonth]} {getyear}</Text>
                 
                    </View>
                </View>
                <DateTimePickerModal
                    isVisible={showdatepicker}
                    mode="date"
                    onConfirm={(date)=>onConfirmDate(date)}
                    onCancel={hideDatePicker}
                />
             
            </View>

            <View style={{ flex: 1 }}>
               
                       
                            <Text style={{ fontSize: 18, marginHorizontal: 30 }}>Income Title</Text>
                            <TextInput
                               defaultValue={item.name}
                               onChangeText={(val)=>settitle(val)}
                                placeholderTextColor="#666666"
                                placeholder="Title..."
                                style={{ backgroundColor: 'white', marginHorizontal: 20, borderRadius: 10, height: 50, marginVertical: 10, alignItems: 'center', justifyContent: "flex-start", paddingHorizontal: 20, fontSize: 16, elevation: 0.6 }} />
                            


                            <Text style={{ fontSize: 18, marginHorizontal: 30, }}>Amount</Text>
                            <TextInput
                                defaultValue={item.amount}
                                onChangeText={(val)=>setamount(val)}
                                placeholderTextColor="#666666"
                                placeholder="123..." keyboardType="numeric"
                                style={{ backgroundColor: 'white', marginHorizontal: 20, borderRadius: 10, height: 50, marginVertical: 10, alignItems: 'center', justifyContent: "flex-start", paddingHorizontal: 20, fontSize: 16, elevation: 0.6 }} />


                            <Text style={{ fontSize: 18, marginHorizontal: 30 }}>Comment</Text>
                            <TextInput
                               defaultValue={item.comment}
                                onChangeText={(val)=>setcomment(val)}
                                placeholderTextColor="#666666"
                                placeholder="Comment..."
                                style={{ backgroundColor: 'white', marginHorizontal: 20, borderRadius: 10, height: 50, marginVertical: 10, alignItems: 'center', justifyContent: "flex-start", paddingHorizontal: 20, fontSize: 16, elevation: 0.6 }} />


                            <View style={{ marginTop: 40, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
                              {loading ? <LoadingButton/> :<AppButton name='Edit Income' onPress={doEditItem}  />}
                                
                            </View>
                        
                    

              
            </View>

        </ScrollView>
    )
}
