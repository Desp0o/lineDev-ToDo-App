import { configureStore } from "@reduxjs/toolkit";
import settingSlicer from "./settingSlicer";
import todoEditSlicer from "./todoEditSlicer";
import burgerSlicer from "./burgerSlicer";
import searchSlicer from "./searchSlicer";
import addTaskSlicer from "./addTaskSlicer";

const store = configureStore({
    reducer:{
        settingPanelStore: settingSlicer,
        todoEditStore: todoEditSlicer,
        burgerStore: burgerSlicer,
        searchStore: searchSlicer,
        taskIconStore: addTaskSlicer
    }
})

export default store