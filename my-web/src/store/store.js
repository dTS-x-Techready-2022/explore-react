import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from './Features/gallerySlice';
import imageReducer from './Features/imageSlice';

export const store = configureStore({
    reducer: {
        gallery: galleryReducer,
        image: imageReducer,
    }
})