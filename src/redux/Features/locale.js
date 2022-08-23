import { createSlice } from "@reduxjs/toolkit";
import i18n from "i18next";


export const localeSlice = createSlice({
    name: "locale",
    initialState: {
        value: {
            lang: "en",
            dir: "ltr"
        }
    },
    reducers: {
        changeLocale: (state, action) => {
            state.value = action.payload
            i18n.changeLanguage(action.payload.lang);
        }
    }
})
export const { changeLocale } = localeSlice.actions
export default localeSlice.reducer