import { configureStore } from "@reduxjs/toolkit";
import settingSlicer from "./settingSlicer";
import todoEditSlicer from "./todoEditSlicer";
import burgerSlicer from "./burgerSlicer";
import searchSlicer from "./searchSlicer";

const store = configureStore({
    reducer:{
        settingPanelStore: settingSlicer,
        todoEditStore: todoEditSlicer,
        burgerStore: burgerSlicer,
        searchStore: searchSlicer
    }
})

export default store