
import React,{useState} from 'react'
import { View, Text, Image,TouchableOpacity,ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector ,useDispatch} from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


import { AddincomeStyle } from './AddincomeStyle'
import { deleteExpenseItem , deleteIncomeItem } from '../../src/Store/actions/AuthAction';

export default function Addincome({navigation}) {
    const expense = useSelector(state => state.AuthReducer.AllExpense)
    const income = useSelector(state => state.AuthReducer.AllIncome)
    const [viewMode, setViewMode] = useState('income')
    const dispatch = useDispatch()



    const editIncomeItem=(item)=>{
        console.log('edit Income')
     navigation.navigate('edit',{item})
    }
    const editExpenseItem=(item)=>{
        console.log('editExpense')
        navigation.navigate('editexpense',{item})
    }
    const DeleteExpenseItem=(item)=>{
        dispatch(deleteExpenseItem(item.id))
    }
   const DeleteIncomeItem=(item)=>{
    dispatch(deleteIncomeItem(item.id))
   }


    const renderLeftActions = (item,progress, dragX) => {
        
        return (
            <View style={{flexDirection:'row',width:120}}>

          <TouchableOpacity onPress={()=>editIncomeItem(item)} style={{backgroundColor:'#27ae60',flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Feather  name='edit' size={25} color='white' />
           
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>DeleteIncomeItem(item)} style={{backgroundColor:'#e74c3c',flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Ionicons  name='trash-outline' size={25} color='white' />
           
          </TouchableOpacity>
            </View>
        );
      };
      const expenseLeft =(item)=>{
        return (
            <View style={{flexDirection:'row',width:120}}>

          <TouchableOpacity onPress={()=>editExpenseItem(item)} style={{backgroundColor:'#27ae60',flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Feather  name='edit' size={25} color='white' />
           
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>DeleteExpenseItem(item)} style={{backgroundColor:'#e74c3c',flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Ionicons  name='trash-outline' size={25} color='white' />
           
          </TouchableOpacity>
            </View>
        );
      }
        // income map function
        const renderincome = (item, index) => {
            return (
                  <View key={index} >
                <Swipeable renderRightActions={() => renderLeftActions(item)}>
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
                <Swipeable style={{backgroundColor:'white'}}  renderRightActions={() => expenseLeft(item)}>
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
        <ScrollView style={AddincomeStyle.root} >
            <View style={{height:280,backgroundColor:'#F1F2F7'}}>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'space-between',paddingHorizontal:25,justifyContent:'space-between',paddingTop:20  }}>
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()} ><FontAwesome name='bars' size={25} color='black' /></TouchableOpacity>

             <Text style={{fontSize:22,color:'black'}}>Add</Text>
             <Image style={{width:30,height:30}} source={require('../../src/assets/avtar.png')} />
            </TouchableOpacity>
            <View style={{paddingHorizontal:20,paddingTop:15}}>
                <Text style={{fontSize:25 ,color:'#020202',fontWeight:'900',letterSpacing:1}}>Overview</Text>
            </View>
            <View style={{marginTop:20,marginHorizontal:30,flexDirection:'row',justifyContent:'space-between'}} >
                <TouchableOpacity onPress={()=>navigation.navigate('AddIncome')} style={{marginLeft:15,width:120,borderRadius:15, backgroundColor:'white',height:120,justifyContent:'center',alignItems:'center'}}>
                
                <Ionicons name='ios-wallet' color='gray' size={50} />
                <Text style={{fontSize:18,paddingTop:10,alignSelf:'center',color:'gray'}}>Add Income</Text>
               
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('AddExpense')} style={{marginLeft:15,width:120,borderRadius:15, backgroundColor:'#7FC1DC',height:120,justifyContent:'center',alignItems:'center'}}>
                <Ionicons name='ios-wallet' color='white' size={50} />
                <Text style={{fontSize:18,paddingTop:10,alignSelf:'center',color:'white'}}>Add Expense</Text>
         
         
                </TouchableOpacity>
   
            </View>
            </View>
            <View style={{backgroundColor:'white',borderTopRightRadius:50}}>
                <View style={{flexDirection:'row',height:50}}>
                    <TouchableOpacity onPress={() => setViewMode("income")} style={{ flex:1,alignContent:'center',justifyContent:'center',backgroundColor: viewMode == "expense" ? 'white' : '#7FC1DC'}}>
                        <Text style={{alignSelf:'center',fontSize:18,fontWeight:'700',letterSpacing:1,color:viewMode == "expense" ? 'gray' : 'white'}}>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setViewMode("expense")} style={{ flex:1,alignContent:'center',justifyContent:'center',backgroundColor: viewMode == "income" ? 'white' : '#7FC1DC'}}>
                        <Text style={{alignSelf:'center',fontSize:18,fontWeight:'700',letterSpacing:1,color:viewMode == "income" ? 'gray' : 'white'}}>Expense</Text>
                    </TouchableOpacity>

                </View>

              {viewMode == 'income' ?
                <View  >
                   <Text style={{ fontWeight: '900', letterSpacing: 1, paddingLeft: 25, paddingTop: 15, fontSize: 22, color: 'black' }}>Income</Text>
                    {income.map((item,index)=>(
                        renderincome(item,index)
                    ))}
                     </View>

                   
                    : viewMode == 'expense' ?
                    <View>
                  <Text style={{ fontWeight: '900', letterSpacing: 1, paddingLeft: 25, paddingTop: 15, fontSize: 22, color: 'black' }}>Expense</Text>
                  {expense.map((item,index)=>(
                      renderexpense(item,index)
                  ))}
                </View>
                 : null
                }
          
           
            </View>
            
        </ScrollView>
    )
}
