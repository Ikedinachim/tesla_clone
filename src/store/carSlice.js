import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ['Model S','Model 3', 'Model X', 'Model Y'],

}

const carSlice = createSlice({
    initialState: initialState,
    name: 'cars',
    reducers:{}

});


export const carActions = carSlice.actions;
export default carSlice.reducer;