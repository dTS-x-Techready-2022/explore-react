import { createSlice } from "@reduxjs/toolkit"

// import dataPengguna from "../assets/data/dataPengguna"

export const authSlice = createSlice({
    name : 'auth',
    initialState : {
        userData : null
    },
    reducers : {
        handleLogin : (state, action) => {
            state.userData = action.payload.userData
            
            //setelah cek data pengguna, simpan ke local storage
            // !!!!! ini bukan bestpractice !!!!!!!!!
            localStorage.setItem('userData', JSON.stringify(action.payload.userData))

        },
        handleLogout : (state) => {
            state.userData = null

            localStorage.removeItem('userData')
        }
    }
})

export const { handleLogin, handleLogout } = authSlice.actions

export default authSlice.reducer