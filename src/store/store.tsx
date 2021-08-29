import { combineReducers, createStore } from 'redux';
import { tasksReducer } from "./tasks-reducer";

const rootReducer = combineReducers({
    tasks: tasksReducer
})

export const store = createStore(rootReducer);

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends {[key: string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>>

export type AppRootStateType = ReturnType<typeof rootReducer>
