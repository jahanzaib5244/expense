
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AppButton from '../../src/component/AppButton'
// import { TextInput } from 'react-native-paper'
import { Calendar } from 'react-native-calendars';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Addstyle } from './Addstyle'
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';


const validationschema = Yup.object().shape({

    incometitle: Yup.string().required().label("Income Title"),
    amount: Yup.number().required().label("Amount"),
    comment: Yup.string().label("Comment"),

});
export default function Add({ navigation }) {
    
    const month = ['index', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const [showdatepicker, setshowdatepicker] = useState(false)
   

    const [getyear, setgetyear] = useState('')
    const [getmonth, setgetmonth] = useState('')
    const [getdate, setgetdate] = useState('')
    const onConfirmDate = (date) => {
    console.log(date)
       setgetyear( date.getFullYear())
        // setgetmonth(date.getMonth())
        const dateString = JSON.stringify(date)
        setgetmonth((dateString.slice(6, 8)));
        setgetdate(date.getDate())
       
        
        
        hideDatePicker();
    };
    const hideDatePicker = () => {
        setshowdatepicker(false)
    }
    return (
        <ScrollView style={Addstyle.root} >
            <View >
            <View style={{ flexDirection: 'row', alignItems: 'space-between', paddingHorizontal: 25, justifyContent: 'space-between', paddingTop: 20 }}>
                
                <TouchableOpacity  onPress={()=>navigation.goBack()}><Fontisto name='arrow-left-l' color="black" size={25} /></TouchableOpacity>
                <Text style={{ fontSize: 22, color: 'black' }}>Add Expense</Text>
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
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>{getdate} {month[getmonth]}, {getyear}</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>18% more than last month</Text>
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
                <Formik
                    initialValues={{ incometitle: '', amount: '', comment: '' }}
                    validationSchema={validationschema}
                    onSubmit={values => doSigninUser(values)}>
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                        <>
                            <Text style={{ fontSize: 18, marginHorizontal: 30 }}>Income Title</Text>
                            <TextInput
                                onBlur={() => setFieldTouched("incometitle")}
                                onChangeText={handleChange("incometitle")}
                                placeholderTextColor="#666666"
                                placeholder="Title..."
                                style={{ backgroundColor: 'white', marginHorizontal: 20, borderRadius: 10, height: 50, marginVertical: 10, alignItems: 'center', justifyContent: "flex-start", paddingHorizontal: 20, fontSize: 16, elevation: 0.6 }} />
                            {touched.incometitle && <Text style={{ color: '#FF6666', marginHorizontal: 30, }}>{errors.incometitle}</Text>}


                            <Text style={{ fontSize: 18, marginHorizontal: 30, }}>Amount</Text>
                            <TextInput
                                onBlur={() => setFieldTouched("amount")}
                                onChangeText={handleChange("amount")}
                                placeholderTextColor="#666666"
                                placeholder="123..." keyboardType="numeric"
                                style={{ backgroundColor: 'white', marginHorizontal: 20, borderRadius: 10, height: 50, marginVertical: 10, alignItems: 'center', justifyContent: "flex-start", paddingHorizontal: 20, fontSize: 16, elevation: 0.6 }} />
                            {touched.amount && <Text style={{ color: '#FF6666', marginHorizontal: 30, }}>{errors.amount}</Text>}


                            <Text style={{ fontSize: 18, marginHorizontal: 30 }}>Comment</Text>
                            <TextInput
                                onBlur={() => setFieldTouched("comment")}
                                onChangeText={handleChange("comment")}
                                placeholderTextColor="#666666"
                                placeholder="Comment..."
                                style={{ backgroundColor: 'white', marginHorizontal: 20, borderRadius: 10, height: 50, marginVertical: 10, alignItems: 'center', justifyContent: "flex-start", paddingHorizontal: 20, fontSize: 16, elevation: 0.6 }} />
                            {touched.comment && <Text style={{ color: '#FF6666', marginHorizontal: 30, }}>{errors.comment}</Text>}


                            <View style={{ marginTop: 40, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>

                                <AppButton name='Add Income' onPress={handleSubmit} />
                            </View>
                        </>
                    )}

                </Formik>
            </View>

        </ScrollView>
    )
}
