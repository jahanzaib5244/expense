import React, { useState,useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList,ScrollView, ViewPropTypes } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch, useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import RadioForm from 'react-native-simple-radio-button';
import moment from "moment";




import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import AppButton from '../../src/component/AppButton';
import { GetSearchData } from '../../src/Store/actions/AuthAction';
import LoadingButton from '../../src/component/LoadingButton';

export default function Search({navigation}) {
    const Searchdata = useSelector(state => state.AuthReducer.SearchData)
    console.log(Searchdata)
    const month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const [showdatepicker, setshowdatepicker] = useState(false)
    const [getyear, setgetyear] = useState('')
    const [getmonth, setgetmonth] = useState('')
    const [getdate, setgetdate] = useState('')
    const [SelectedCategory, setSelectedCategory] = useState('outcome')
    const [SelectedMode, setSelectedMode] = useState('date')
    const [loading, setloading] = useState(false)
    const onConfirmDate = (date) => {
        setgetyear(moment(date).year())
        setgetmonth(moment(date).month()) 
        setgetdate(moment(date).date())
        hideDatePicker();
    };
    const arrayLength=Searchdata.length
    console.log(arrayLength)
    useEffect(() => {
        setgetyear(moment().year())
        setgetmonth(moment().month()) 
        setgetdate(moment().date())
    }, [])
    const hideDatePicker = () => {
        setshowdatepicker(false)
    }
    const dispatch = useDispatch()
    const CtaSearch = () => {
        dispatch(GetSearchData(setloading, getdate, getmonth, getyear, SelectedCategory, SelectedMode))
    }
    const radio_BTN_value = [
        { label: 'Daily', value: "date" },
        { label: 'Monthly', value: "month" },
    
      ];
    const renderSearch = (item,index) => {
        return (

            <View key={index} style={{ marginHorizontal: 20, marginVertical: 10, flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'center', }}>
                <View>
                    <Image style={{ height: 50, width: 50, borderRadius: 15 }} source={require('../../src/assets/avtar.png')} />

                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ marginHorizontal: 15, }}>
                        <Text numberOfLines={1} style={{ fontSize: 18, color: 'black', width: 100 }}>{item.name}</Text>
                        <Text>{item.add_date}</Text>
                    </View>
                    <View style={{ marginHorizontal: 20, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 15, fontWeight: '100', color: 'black' }}>PKR-{item.amount} + Vat 1%</Text>
                        <Text numberOfLines={1}  >{item.comment}</Text>
                    </View>
                </View>
            </View>

        )
    }
    const empty = () => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                <LottieView
                    source={require('../../src/assets/noData.json')}
                    autoPlay loop
                    style={{ height: 250, width: 250 }}
                />
            </View>
        )
    }

    return (
        <ScrollView style={{ flex: 1,backgroundColor:'white'  }}>
            
            <View style={{backgroundColor: '#F1F2F7'}}>
                <View style={{ flexDirection: 'row', alignItems: 'space-between', paddingHorizontal: 25, justifyContent: 'space-between', paddingTop: 20 }}>
                <TouchableOpacity onPress={()=>navigation.toggleDrawer()} ><FontAwesome name='bars' size={25} color='black' /></TouchableOpacity>

                    <Text style={{ fontSize: 22, color: 'black' }}>Search</Text>
                    <Image style={{ width: 30, height: 30 }} source={require('../../src/assets/avtar.png')} />
                </View>
                {/* date time picker section */}
                <View style={{ flexDirection: 'row', marginVertical: SIZES.padding, alignItems: 'center', paddingHorizontal: 70,}}>
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
                    onConfirm={(date) => onConfirmDate(date)}
                    onCancel={hideDatePicker}
                />
                {/* Category select section */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => setSelectedCategory("outcome")}
                        style={{ alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: SelectedCategory == 'outcome' ? '#7FC1DC' : 'white', width: 100, borderRadius: 10 }}>
                        <Text style={{ color: SelectedCategory == 'outcome' ? "white" : 'gray' }}>Expense</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedCategory("income")}
                        style={{ alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: SelectedCategory == 'income' ? '#7FC1DC' : 'white', width: 100, borderRadius: 10 }}>
                        <Text style={{ color: SelectedCategory == 'income' ? "white" : 'gray' }}>Income</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:10}}>
                <RadioForm
                    style={{ justifyContent: 'space-evenly',
                    marginTop: 15}}
                    radio_props={radio_BTN_value}
                    animation={true}
                    // labelColor={'#7FC1DC'}
                    formHorizontal={true}
                    buttonColor={'#7FC1DC'}
                    selectedButtonColor={'#7FC1DC'}
                    selectedlabelcolor={'#7FC1DC'}
                    buttonSize={10}
                    buttonOuterSize={20}
                    borderWidth={1}
                    onPress={(val) => { setSelectedMode(val) }}
                />
                </View>
                <View style={{ marginVertical: 20, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40 }}>
                    {loading ? <LoadingButton /> : <AppButton name='Search' onPress={CtaSearch} />}

                </View>
            </View>
            <View style={{ backgroundColor: 'white', marginTop: 30,flexGrow :1 }}>

                {arrayLength == 0 ? empty() : Searchdata.map((item,index)=>(
                    renderSearch(item,index)
                ))}
               
            </View>

        </ScrollView>
    )
}
