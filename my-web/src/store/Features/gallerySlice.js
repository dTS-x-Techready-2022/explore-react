import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        image: "./images/kote-puerto-so5nsYDOdxw-unsplash.jpg",
    },
    {
        image: "./images/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg",
    },
    {
        image: "./images/michael-sum-LEpfefQf4rU-unsplash.jpg",
    },
    {
        image: "./images/mikhail-vasilyev-NodtnCsLdTE-unsplash.jpg",
    },
    {
        image: "./images/yerlin-matu-GtwiBmtJvaU-unsplash.jpg",
    },
]

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        addNewGallery: (state, action) => {
            state.push({image: action.payload});
        }
    }
})

export const { addNewGallery } = gallerySlice.actions;
export default gallerySlice.reducer;

