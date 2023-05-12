import { createSlice } from "@reduxjs/toolkit";


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
    choiceFilter(state, action) {
        state.filter = action.payload;
        },
    setContacts(state, action) {
        state.items = action.payload;
     },
    },
});

export const {choiceFilter} = contactsSlice.actions;
export default contactsSlice.reducer;


//     extraReducers: builder => {
//         builder
//         .addCase(fetchContactsThunk.pending, contactPending )
//         .addCase(fetchContactsThunk.rejected, contactReject )
//         .addCase(fetchContactsThunk.fulfilled, (state, {payload}) => {
//             state.items = payload;
//         } )
//         .addCase(addContactThunk.pending, contactPending )
//         .addCase(addContactThunk.rejected, contactReject )
//         .addCase(addContactThunk.fulfilled, (state, {payload}) => {
//             state.items = [payload, ...state.items];
//         } )
//         .addCase(deleteContactThunk.pending, contactPending )
//         .addCase(deleteContactThunk.rejected, contactReject )
//         .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
//             state.items = state.items.filter(item => item.id !== payload.id);
//         } );
//     },

// });

// export const { addContactActions, deleteContactActions } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;