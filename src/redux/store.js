import { configureStore } from "@reduxjs/toolkit";
import settingSlicer from "./settingSlicer";
import todoEditSlicer from "./todoEditSlicer";
import burgerSlicer from "./burgerSlicer";

const store = configureStore({
    reducer:{
        settingPanelStore: settingSlicer,
        todoEditStore: todoEditSlicer,
        burgerStore: burgerSlicer
    }
})

export default store