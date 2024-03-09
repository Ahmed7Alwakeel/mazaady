

import { createSlice } from "@reduxjs/toolkit";
const formDataSlice = createSlice({
    name: "formData",
    initialState: {
        formData:{}
    },
    reducers: { 
        setFormData: (state, action) => {
            state.formData = Object.entries(action.payload).map(([key, value]) => {
                if (typeof value === 'object' && value !== null && 'value' in value && value.value !== null) {
                    return { key: key, value: value.value };
                }
            });
        },
    }
})

export const setFormData = formDataSlice.actions.setFormData
export default formDataSlice.reducer