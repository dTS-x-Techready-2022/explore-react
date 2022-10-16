import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice ({
    name: "timer",
    initialState: { menit: 25, detik: 0 },
    reducers: {
        changeMinute(state, action) {
            state.menit = action.payload;
        },

        changeSecond(state, action) {
            state.detik = action.payload;
        }

    },
});

export const { changeMinute, changeSecond } = timerSlice.actions;
export default timerSlice.reducer;