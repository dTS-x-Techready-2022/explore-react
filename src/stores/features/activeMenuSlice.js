import { createSlice } from "@reduxjs/toolkit";

const activeMenuSlice = createSlice ({
    name: "activeMenu",
    initialState: { value: "" },
    reducers: {
        changeActive(state, action) {
            state.value = action.payload;
        }
    },
});

export const { changeActive } = activeMenuSlice.actions;
export default activeMenuSlice.reducer;