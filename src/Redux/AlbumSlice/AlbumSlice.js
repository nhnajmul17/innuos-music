import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchAlbums = createAsyncThunk("album/albums", async () => {
    const response = await fetch('./albums.json').then((res) => res.json());
    return response;
});

export const AlbumSlice = createSlice({
    name: 'album',
    initialState: {
        albums: [],
        filterItems: []
    },
    reducers: {
        setAlbums: (state, action) => {
            state.albums = action.payload
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.albums = (action.payload)
            state.filterItems = (action.payload)
        })

    },
})

export const { setAlbums } = AlbumSlice.actions

export default AlbumSlice.reducer