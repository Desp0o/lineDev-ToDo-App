import { configureStore } from "@reduxjs/toolkit";
import settingSlicer from "./settingSlicer";

const store = configureStore({
    reducer:{
        settingPanelStore: settingSlicer
    }
})

export default store