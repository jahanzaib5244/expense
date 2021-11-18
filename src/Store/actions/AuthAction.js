import AsyncStorage from '@react-native-async-storage/async-storage';
import { FORGETPASSWORD, LOGIN, LOGOUT, RETREIVEDUSER, SEARCH ,INCOME, EXPENSE, EDITINCOME, EDITEXPENSE, DECEXPENSE, ASEEXPENSE, DECINCOME, ASEINCOME, ALLINCOME, ALLEXPENSE} from '../States';
import axios from 'axios';
import { ActionSheetIOS } from 'react-native';


export const dologin = (email, password, setisinvalid, setloading) => async (dispatch) => {
    setloading(true)

    try {
        let logindata = {
            usertoken: null,
            userdata: null,
            
        }

        const res = await axios.get(`http://expense.cgitsoft.com/api/index.php?action=login&email=${email}&password=${password}`)
        console.log(res)
        if (res.data.sts == "success") {

            logindata.usertoken = res.data.user_details.id;
            logindata.userdata = res.data.user_details;
            await AsyncStorage.setItem('user-id', res.data.user_details.id);
            setloading(false)

        } else {
            if (res.data.sts == 'danger') {

                setloading(false)
                console.log(res.data.msg)
                setisinvalid(res.data.msg)
            }
        }

        dispatch({
            type: LOGIN,
            payload: logindata
        })

    } catch (error) {
        console.log(error)
    }

}

export const dologout = () => async (dispatch) => {
    try {

        AsyncStorage.removeItem('user-id')

        dispatch({
            type: LOGOUT,
        })
    } catch (error) {
        console.log(error)
    }
}


export const ctaforgetPassword = () => async (dispatch) => {
    try {


        dispatch({
            type: FORGETPASSWORD,
            payload: null
        })
    } catch (error) {

    }
}


export const GetUser = (setloading) => async (dispatch) => {
    
    try {

        let getuserdata = {
            expense: [],
            income: [],
            usertoken: null
        }

        let user_id = await AsyncStorage.getItem('user-id')
        if (user_id !== null) {

            const getAllexpense = await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=outcome`)
            const getAllincome = await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=income`)
            //   console.log(getAllexpense)
            //   console.log(getAllincome)
            if (getAllexpense.data.sts == "success" && getAllincome.data.sts == "success") {
                getuserdata.expense = getAllexpense.data.data;
                getuserdata.income = getAllincome.data.data;
                getuserdata.usertoken = user_id;

                setloading(false);
            }
            console.log('not matched with success')
        } else {
            setTimeout(() => {
                setloading(false);
            }, 5000);
        }


        dispatch({
            type: RETREIVEDUSER,
            payload: getuserdata
        })
    } catch (error) {
        console.log(error)
    }

}

export const totalExpense = () => async (dispatch) => {

    try {
        let user_id = await AsyncStorage.getItem('user-id')
        let res = await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=outcome`)
        console.log(res.data.sts) 
        if (res.data.sts == "success"){
              console.log(res.data.sts)
              let expense=res.data.data
              dispatch({
                  type:ALLEXPENSE,
                  payload:expense
              })
          }
    } catch (error) {

    }
}
export const totalIncome = () => async (dispatch) => {

    try {
        let user_id = await AsyncStorage.getItem('user-id')
        let res = await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=income`)
        console.log(res.data.sts)
        if(red.data.sts == "success"){
          
          let income= res.data.data
          dispatch({
              type:ALLINCOME,
              payload:income
          })
        }
    } catch (error) {

    }
}

export const GetSearchData = (setloading, getdate, getmonth, getyear, SelectedCategory, SelectedMode) => async (dispatch) => {
    var Searchdata = []
    console.log( getdate, getmonth, getyear , SelectedMode , SelectedCategory)
    setloading(true)
    let user_id = await AsyncStorage.getItem('user-id')
    try {
          const res=await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=${SelectedCategory}&filter=${getyear}-${getmonth}-${getdate}&by=${SelectedMode}`)
        
          console.log(res)
            console.log(res.data.data)
              Searchdata=res.data.data
        
        dispatch({
            type: SEARCH,
            payload: Searchdata
        })
    } catch (error) {

    }finally{
        setloading(false)
    }
}
export const editIncomeItem=(setloading,ItemId,getyear,getmonth,getdate,title,amount,comment)=>async(dispatch)=>{
    try {
        setloading(true)
        let user_id = await AsyncStorage.getItem('user-id')
        
        const res =await axios.get(`http://expense.cgitsoft.com/api/index.php?action=edit_budget&operation=income&amount=${amount}&add_date=${getyear}-${getmonth}-${getdate}&admin_id=${user_id}&comment=${comment}&name=${title}&id=${ItemId}`)
        if(res.data.sts == "success"){
            let user_id = await AsyncStorage.getItem('user-id')
            const AllIncome= await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=income`)
            let GetAllIncome=AllIncome.data.data
            dispatch({
                type:EDITINCOME,
                payload:GetAllIncome
            })
        }
    } catch (error) {
        console.log(error)
    }finally{
        setloading(false)
    }
}


export const deleteIncomeItem=(itemID)=>async(dispatch)=>{
    
    try {
        const res=await axios.get(`http://expense.cgitsoft.com/api/index.php?action=delete_budget&operation=income&id=${itemID}`)
        console.log(res)     
        if(res.data.sts == "success"){
            let user_id = await AsyncStorage.getItem('user-id')
            const getincome = await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=income`)
            let income = getincome.data.data;    
            dispatch({
                type:INCOME,
                payload:income
            })    
        }

    } catch (error) {
        console.log(error)
    }
}



export const editExpenseItem=(setloading,ItemId,getyear,getmonth,getdate,title,amount,comment)=>async(dispatch)=>{
    try {
        setloading(true)
        let user_id = await AsyncStorage.getItem('user-id')
        console.log(setloading,ItemId,getyear,getmonth,getdate,title,amount,comment)
        const res =await axios.get(`http://expense.cgitsoft.com/api/index.php?action=edit_budget&operation=outcome&amount=${amount}&add_date=${getyear}-${getmonth}-${getdate}&admin_id=${user_id}&comment=${comment}&name=${title}&id=${ItemId}`)
       if(res.data.sts == "success"){
           const AllExpense=await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=outcome`)
            let  GetAllExpense=AllExpense.data.data
            dispatch({
                type:EDITEXPENSE,
                payload:GetAllExpense
            })
        }
    } catch (error) {
        console.log(error)
    }finally{
        setloading(false)
    }
}




export const deleteExpenseItem=(itemID)=>async(dispatch)=>{
    
    try {
        const res=await axios.get(`http://expense.cgitsoft.com/api/index.php?action=delete_budget&operation=outcome&id=${itemID}`)
        console.log(res)
        if(res.data.sts == "success"){
            let user_id = await AsyncStorage.getItem('user-id')
            const getexpense = await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=outcome`)
            let expense = getexpense.data.data;    
            dispatch({
                type:EXPENSE,
                payload:expense
            })    
        }

    } catch (error) {
        console.log(error)
    }
}

export const AseendingOrderIncome=()=>async(dispatch)=>{
    try {
        console.log('assending order incme')
        let user_id = await AsyncStorage.getItem('user-id')
        const assendingorder=await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=income&order=asc`)
          console.log(assendingorder.data.data)
        if(assendingorder.data.sts == "success"){
            let income = assendingorder.data.data

           dispatch({
               type:ASEINCOME,
               payload:income
           })
        }
    } catch (error) {
        console.log(error)
    }
}
export const DecendingOrderIncome=()=>async(dispatch)=>{
    try {
        let user_id = await AsyncStorage.getItem('user-id')
        const decendingorder=await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=income&order=desc`)
        if(decendingorder.data.sts == "success"){
            let income = decendingorder.data.data
            console.log(decendingorder.data.data)

           dispatch({
               type:DECINCOME,
               payload:income
           })
        }
    } catch (error) {
        console.log(error)
    }
}

export const AseendingOrderExpense=()=>async(dispatch)=>{
    try {
        let user_id = await AsyncStorage.getItem('user-id')
        const accendingorder=await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=outcome&order=asc`)
        if(accendingorder.data.sts == "success"){
            let expense = accendingorder.data.data
            console.log(accendingorder.data.data)

           dispatch({
               type:ASEEXPENSE,
               payload:expense
           })
        }
    } catch (error) {
        console.log(error)
    }
}
export const DecendingOrderExpense=()=>async(dispatch)=>{
    try {
        let user_id = await AsyncStorage.getItem('user-id')
        const decendingorder=await axios.get(`http://expense.cgitsoft.com/api/index.php?action=search_budget&admin_id=${user_id}&operation=outcome&order=desc`)
         if(decendingorder.data.sts == "success"){
             let expense = decendingorder.data.data
             console.log(decendingorder.data.data)

            dispatch({
                type:DECEXPENSE,
                payload:expense
            })
         }
    } catch (error) {
        console.log(error)
    }
}