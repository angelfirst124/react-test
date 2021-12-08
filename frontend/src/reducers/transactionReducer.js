import {  GET_TRANASACTIONS } from '../actions/types';
const initialState = {
    transactions: []    
}

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case  GET_TRANASACTIONS:
            return {
                ...state,
                 transactions: action.payload 
            };        
        default: return state;
    }
}

export default transactionReducer;