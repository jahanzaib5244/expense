import { ALLEXPENSE, ALLINCOME, ASEEXPENSE, ASEINCOME, DECEXPENSE, DECINCOME, EDITEXPENSE, EDITINCOME, EXPENSE, FORGETPASSWORD, INCOME, LOGIN, LOGOUT, RETREIVEDUSER, SEARCH } from "../States";



const initialState = {

    usertoken: null,
    AllExpense: [],
    AllIncome: [],
    SearchData: [],
    userData:null
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                usertoken: action.payload.usertoken,
                userData: action.payload.userdata
            }
        }

        case LOGOUT: {
            return {
                ...state,
                usertoken: null,
                userData: null,
            }
        }
        case FORGETPASSWORD: {
            return {
                ...state
            }
        }
        case RETREIVEDUSER: {
            return {
                ...state,
                usertoken: action.payload.usertoken,
                AllExpense: action.payload.expense,
                AllIncome: action.payload.income,
            }
        }
        case SEARCH: {
            return {
                ...state,
                SearchData: action.payload
            }
        }
        case INCOME: {
            return {
                ...state,
                AllIncome: action.payload
            }
        }
        case EXPENSE: {
            return {
                ...state,
                AllExpense: action.payload
            }
        }
        case EDITINCOME: {
            return {
                ...state,
                AllIncome: action.payload
            }
        }
        case EDITEXPENSE: {
            return {
                ...state,
                AllExpense: action.payload
            }
        }
        case ASEINCOME: {
            return {
                ...state,
                AllIncome: action.payload
            }
        }
        case DECINCOME: {
            return {
                ...state,
                AllIncome: action.payload
            }
        }
        case ASEEXPENSE: {
            return {
                ...state,
                AllExpense: action.payload
            }
        }
        case DECEXPENSE: {
            return {
                ...state,
                AllExpense: action.payload
            }
        }
        case ALLINCOME: {
            return {
                ...state,
                AllIncome: action.payload
            }
        }
        case ALLEXPENSE: {
            return {
                ...state,
                AllExpense: action.payload
            }
        }
        default:
            return state;
    }

}