import { createSlice } from "@reduxjs/toolkit"
import { ROLES } from "../../utils/constants/roles";

const initialState = {
    isAuthenticated: false,
    role: ROLES.GUEST,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.role = action.payload.role;
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.role = ROLES.GUEST;
        },
    },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;