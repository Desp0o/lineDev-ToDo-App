import { configureStore } from "@reduxjs/toolkit";
import settingSlicer from "./settingSlicer";
import todoEditSlicer from "./todoEditSlicer";

const store = configureStore({
    reducer:{
        settingPanelStore: settingSlicer,
        todoEditStore: todoEditSlicer
    }
})

export default store