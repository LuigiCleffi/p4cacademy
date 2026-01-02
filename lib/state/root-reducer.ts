import { combineReducers } from "@reduxjs/toolkit";
import courseReducer from "@/lib/state/course/slice"
const rootReducer = combineReducers({
    courseReducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>