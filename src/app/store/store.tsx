
import { configureStore } from "@reduxjs/toolkit";
import formData from "./formData";
export const store = configureStore({
    reducer: {
        formData
    }
})