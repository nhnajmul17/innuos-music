import { configureStore } from '@reduxjs/toolkit'
import AlbumReducer from './AlbumSlice/AlbumSlice'

export default configureStore({
    reducer: {
        album: AlbumReducer
    },
})