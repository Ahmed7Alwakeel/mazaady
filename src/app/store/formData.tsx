

import { createSlice } from "@reduxjs/toolkit";
const formDataSlice = createSlice({
    name: "formData",
    initialState: {
        formData:{}
    },
    reducers: { 
        setFormData: (state, action) => {
            state.formData = action.payload
        },
    }
})

export const setFormData = formDataSlice.actions.setFormData
export default formDataSlice.reducer