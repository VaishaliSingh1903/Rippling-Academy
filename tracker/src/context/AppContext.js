import { createContext, useReducer, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

const AppReducer = (state,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                ...state, 
                expanses: [...state.expanses, action.payload]
            };

        case 'DELETE_EXPENSE':
            return{
                ...state, 
                expanses: state.expanses.filter(
                    (expanse)=> expanse.id !== action.payload ),
            };
        
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };

        default:
            return state;
    }
};


const intialState = {
    budget: 20000,
    expanses: [
        { id:uuidv4(), name:"Makeup", cost:50, date:"2022-02-22",type:"Cash" , category:"Shopping"},
        { id:uuidv4(), name:"Comb", cost:80, date:"2023-02-12",type:"Card", category:"Shopping " },
         
    ],

};

export  const AppContext = createContext(); 

export const AppProvider = (props) =>{
    const [state,dispatch] = useReducer(AppReducer, intialState, () => {
        const localData = localStorage.getItem('state');
        return localData ? JSON.parse(localData) : intialState;
    });
    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    },[state]);
    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expanses: state.expanses,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    )
};