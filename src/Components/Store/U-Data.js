import { createSlice } from '@reduxjs/toolkit';
// const a = window.localStorage.getItem('userType');

export const UserDataAction = createSlice({
    name: 'UserData',
    initialState: { value: "" },

    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        Type1: (state, action) => {
            state.value = action.payload;
        },
    }
});


export const { Type1 } = UserDataAction.actions;

export const U1 = (state) => state.UserData.value;

export default UserDataAction.reducer;