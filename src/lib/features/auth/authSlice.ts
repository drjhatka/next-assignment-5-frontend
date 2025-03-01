import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type AuthUserState ={
    email: string | null;
    role: string | null;
    accessToken: string | null;
}
const initialState : AuthUserState = {
    email: null,
    role: null,
    accessToken: null,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state: AuthUserState, action:PayloadAction< AuthUserState>) => {
            console.log('payload',action.payload)
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.accessToken = action.payload.accessToken;
        },
        logOut: (state:AuthUserState):void => {
            state.email = null;
            state.role = null;
            state.accessToken = null;
        }
    }
})
export const {setUser,logOut} = authSlice.actions;
export default authSlice.reducer;