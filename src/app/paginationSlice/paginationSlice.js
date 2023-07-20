import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPages: [],
    limitPages: 20,
    page: 1
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        nextPage: (state) => {
            state.page++;
        },
        prevPage: (state) => {
            state.page--;
        },
        loadTotalPages: (state, action) => {
            console.log(action);
            let arrPages = [];
            let pages = Math.ceil(action.payload.totalProducts / action.payload.limit);
            for(let i = 0; i < pages; i++) {
                arrPages.push(i+1)
            }
            state.totalPages = arrPages;
        },
        updateLimit: (state, action)=>{
            state.limitPages = action.payload
        }
    }
});

export const { setPage, nextPage, prevPage, loadTotalPages, updateLimit } = paginationSlice.actions;
export default paginationSlice.reducer;