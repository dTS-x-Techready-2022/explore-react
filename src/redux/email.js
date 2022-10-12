import { createSlice } from "@reduxjs/toolkit"



export const emailSlice = createSlice({
    name : 'email',
    initialState : {
        emails : [],
        selectedEmail : null
    },
    reducers : {
        getEmails : (state, action) => {

        },
        getSelectedEmail : (state, action) => {
        }
    }
})

export const { getEmails, getSelectedEmail } = emailSlice.actions

export default emailSlice.reducer