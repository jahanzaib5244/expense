import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Feather from 'react-native-vector-icons/Feather'

import { HomeStyle } from './HomeStyle'
import { deleteExpenseItem, deleteIncomeItem, AseendingOrderExpense, DecendingOrderExpense, DecendingOrderIncome, AseendingOrderIncome, totalExpense, totalIncome } from '../../src/Store/actions/AuthAction';
import EclipsBtn from '../../src/component/EclipsBtn';

export default function DrawerHome({ navigation }) {
    const expense = useSelector(state => state.AuthReducer.AllExpense)
    const income = useSelector(state => state.AuthReducer.AllIncome)
    const [viewMode, setViewMode] = useState('income')

    const dispatch = useDispatch()
    const editIncomeItem = (item) => {
        console.log('edit Income')
        navigation.navigate('edit', { item })
    }
    const editExpenseItem = (item) => {
        console.log('editExpense')
        navigation.navigate('editexpense', { item })
    }
    const DeleteExpenseItem = (item) => {
        dispatch(deleteExpenseItem(item.id))
    }
    const DeleteIncomeItem = (item) => {
        dispatch(deleteIncomeItem(item.id))
    }


    const defaultExpenseOrder = () => {
        dispatch(totalExpense())
    }
    const assendingExpenseOrder = () => {
        dispatch(AseendingOrderExpense())
    }
    const decendingExpenseOrder = () => {
        dispatch(DecendingOrderExpense())
    }
    const defaultIncomeOrder = () => {
        dispatch(totalIncome())
    }
    const assendingIncomeOrder = () => {
        dispatch(AseendingOrderIncome())
    }
    const decendingIncomeOrder = () => {
        dispatch(DecendingOrderIncome())
    }
    const renderLeftActions = (item, progress, dragX) => {

        return (
            <View style={{ flexDirection: 'row', width: 120, marginBottom: 2 }}>

                <TouchableOpacity onPress={() => editIncomeItem(item)} style={{ backgroundColor: '#27ae60', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Feather name='edit' size={25} color='white' />

                </TouchableOpacity>
                <TouchableOpacity onPress={() => DeleteIncomeItem(item)} style={{ backgroundColor: '#e74c3c', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name='trash-outline' size={25} color='white' />

                </TouchableOpacity>
            </View>
        );
    };
    const expenseLeft = (item) => {
        return (
            <View style={{ flexDirection: 'row', width: 120, marginBottom: 2 }}>

                <TouchableOpacity onPress={() => editExpenseItem(item)} style={{ backgroundColor: '#27ae60', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Feather name='edit' size={25} color='white' />

                </TouchableOpacity>
                <TouchableOpacity onPress={() => DeleteExpenseItem(item)} style={{ backgroundColor: '#e74c3c', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name='trash-outline' size={25} color='white' />

                </TouchableOpacity>
            </View>
        );
    }

    const renderincome = (item, index) => {
        return (
              <View key={index}>
            <Swipeable  renderRightActions={() => renderLeftActions(item)}>
                <View style={{height: 70, backgroundColor: 'white'}}>
                     <View  style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                    <View style={{ flex: 1, marginHorizontal: 30, justifyContent: 'space-between', flexDirection: 'row',alignItems:'center' }}>
                        <View style={{paddingVertical:13}}>
                            <Text numberOfLines={1} style={{ fontSize: 18, color: 'black', width: 100 }}>{item.name}</Text>
                            <Text>{item.add_date}</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 18, fontWeight: '100', color: 'black' }}>PKR-{item.amount}</Text>
                            <Text numberOfLines={1}  >{item.comment}</Text>
                        </View>
                    </View>

                  </View>
                </View>
                </Swipeable>
                <View style={{ height: 2, backgroundColor: 'gray', opacity: 0.2 }} />
            
            </View>
        )
    }
    const renderexpense = (item, index) => {

        return (
            <View key={index}>
            <Swipeable  renderRightActions={() => expenseLeft(item)}>
                <View style={{ height: 70, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                        <View style={{ flex: 1, marginHorizontal: 30, justifyContent: 'space-between', flexDirection: 'row',alignItems:'center' }}>
                            <View style={{paddingVertical:13}}>
                                <Text style={{ fontSize: 18, color: 'black', textTransform: "capitalize" }}>{item.name}</Text>
                                <Text>{item.add_date}</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 15, fontWeight: '100', color: 'black' }}>PKR-{item.amount}</Text>
                                <Text>{item.comment}</Text>
                            </View>
                        </View>

                    </View>
                </View>
                </Swipeable>
                <View style={{ height: 2, backgroundColor: 'gray', opacity: 0.2 }} />
            </View>
        )
    }
    return (
        <ScrollView nestedScrollEnabled={true} style={HomeStyle.root} showsVerticalScrollIndicator={false} >
            <View style={{ height: 260, backgroundColor: '#F1F2F7' }}>
                <View style={{ flexDirection: 'row', alignItems: 'space-between', paddingHorizontal: 25, justifyContent: 'space-between', paddingTop: 20 }}>
                  <TouchableOpacity onPress={()=>navigation.toggleDrawer()} ><FontAwesome name='bars' size={25} color='black' /></TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }} source={require('../../src/assets/avtar.png')} />
                </View>
                <View style={{ paddingHorizontal: 20, paddingTop: 15 }}>
                    <Text style={{ fontSize: 25, color: '#020202', fontWeight: '900', letterSpacing: 1 }}>Overview</Text>
                </View>
                <ScrollView style={{ marginTop: 20, marginLeft: 20 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ marginLeft: 20, width: 100, borderRadius: 15, backgroundColor: 'white', height: 120, alignItems: 'center' }}>
                    <Image style={{marginTop:15, width: 20, height: 27, tintColor: 'gray' }} source={require('../../src/assets/white.png')} />
                        <Text style={{ fontSize: 15, paddingTop: 5, color: 'gray' }}>Total Income</Text>
                        <View style={{ flexDirection: 'row', top: 22 }}>

                            <Text numberOfLines={1} style={{ color: 'black', fontSize: 15, fontWeight: '900' }}>PKR </Text>
                            <Text numberOfLines={1} style={{ color: 'black', fontSize: 15, }}>13000</Text>

                        </View>
                    </View>
                    <View style={{ marginLeft: 20, width: 100, borderRadius: 15, backgroundColor: '#7FC1DC', height: 120, alignItems: 'center' }}>

                        <Ionicons style={{ marginTop: 20, }} name='ios-wallet' color='white' size={20} />
                        <Text style={{ fontSize: 15, paddingTop: 5, color: 'white' }}>Total Expense</Text>
                        <View style={{ flexDirection: 'row', top: 22 }}>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '900' }}>PKR</Text>
                            <Text style={{ fontSize: 15, color: 'white' }}>13000</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20, width: 100, borderRadius: 15, backgroundColor: 'white', height: 120, alignItems: 'center' }}>
                        <Ionicons style={{ marginTop: 20, }} name='ios-wallet' color='gray' size={20} />
                        <Text style={{ fontSize: 15, paddingTop: 5, color: 'gray' }}>Total Income</Text>
                        <View style={{ flexDirection: 'row', top: 22 }}>

                            <Text numberOfLines={1} style={{ color: 'black', fontSize: 15, fontWeight: '900' }}>PKR </Text>
                            <Text numberOfLines={1} style={{ color: 'black', fontSize: 15, }}>13000</Text>

                        </View>
                    </View>



                </ScrollView>
            </View>

            <View style={{ backgroundColor: 'white', borderTopRightRadius: 50 }}>


                <View style={{ flexDirection: 'row', marginLeft: 20, alignItems: 'center', justifyContent: 'space-around', marginRight: 20, marginTop: 25 }}>
                    <TouchableOpacity onPress={() => setViewMode("income")} style={{ elevation: 0.3, borderRadius: 15 }}>
                        <View style={{ padding: 2, height: 100, width: 100, backgroundColor: viewMode == "income" ? '#7FC1DC' : 'white', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ width: 33, height: 47, tintColor: viewMode == "income" ? "white" : 'gray' }} source={require('../../src/assets/white.png')} />
                            <Text style={{ top: 4, color: viewMode == "income" ? "white" : 'gray' }}>Income</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => setViewMode("expense")} style={{ margin: 1, elevation: 0.5, borderRadius: 15, backgroundColor: viewMode == "expense" ? '#7FC1DC' : 'white', }}>
                        <View style={{ margin: 4, height: 100, width: 100, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name='ios-wallet' color={viewMode == "expense" ? "white" : 'gray'} size={50} />

                            <Text style={{ color: viewMode == "expense" ? "white" : 'gray' }}>Expense</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* itemdetails */}
                {viewMode == 'income' ?
                    <View >
                        <View style={{ justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', paddingHorizontal: 25, paddingTop: 15, }}>

                            <Text style={{ fontWeight: '900', letterSpacing: 1, fontSize: 22, color: 'black' }}>Income</Text>
                            <EclipsBtn latest={defaultIncomeOrder} assending={assendingIncomeOrder} decending={decendingIncomeOrder} />
                        </View>
                        {income.map((item, index) => (
                            renderincome(item, index)
                        ))}


                    </View>


                    : viewMode == 'expense' ?
                        <View>
                            <View style={{ justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', paddingHorizontal: 25, paddingTop: 15, }}>

                                <Text style={{ fontWeight: '900', letterSpacing: 1, fontSize: 22, color: 'black' }}>Expense</Text>
                                <EclipsBtn latest={defaultExpenseOrder} assending={assendingExpenseOrder} decending={decendingExpenseOrder} />
                            </View>
                            {expense.map((item, index) => (
                                renderexpense(item, index)
                            ))}

                        </View> : null
                }

            </View>

        </ScrollView >
    )
}
