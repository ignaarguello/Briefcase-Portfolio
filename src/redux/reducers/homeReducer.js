import { createReducer } from "@reduxjs/toolkit";
import homeActions from '../actions/homeActions';

const { change_false, change_true } = homeActions


const initialState = {
    theme: false
}

const homeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(change_false, (state,action) => {
            console.log(action)
            return{
                ...state,
                theme: action.payload,
            }
        })

        .addCase(change_true, (state,action) => {
            console.log(action)
            return{
                ...state,
                theme: action.payload,
            }
        })
})


export default homeReducer;