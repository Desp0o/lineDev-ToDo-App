import { configureStore } from "@reduxjs/toolkit";
import settingSlicer from "./settingSlicer";
import todoEditSlicer from "./todoEditSlicer";
import navigationSlicer from "./navigationSlicer";

const store = configureStore({
    reducer:{
        settingPanelStore: settingSlicer,
        todoEditStore: todoEditSlicer,
        navigationStore: navigationSlicer
    }
})

export default store