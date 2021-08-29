import { v1 } from "uuid";
import { InferActionsTypes } from "./store";


export type TaskType = {
    id: string
    task: string
    isDone: boolean

}

export type TasksType = {
    tasks: TaskType[]
}

enum TypeKeys {
    ADD_TASK = "ADD-TASK",
    DELETE_TASK = "DELETE-TASK",
    CHANGE_TASK_STATUS = "CHANGE-TASK-STATUS"
}

export enum FilterKeys {
    All = "all",
    Active = "active",
    Completed = "completed"
}


const initialState: TasksType = {
    tasks:
        [
            {id: v1(), task: "", isDone: false}
        ]
}

export const tasksReducer = (state: TasksType = initialState, action: ActionsType) => {
    switch (action.type) {
        case TypeKeys.ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, {id: v1(), task: action.payload.task, isDone: false}]
            }
        }
        case TypeKeys.DELETE_TASK: {
            return {
                ...state,
                tasks: [...state.tasks.filter((s) => s.id !== action.payload.taskId)]
            }
        }
        case TypeKeys.CHANGE_TASK_STATUS: {
            const stateCopy = {...state};
            const task = stateCopy.tasks.find(t => t.id === action.payload.taskId);
            if (task) {
                task.isDone = action.payload.isDone;
            }
            return stateCopy;
        }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    addTaskAC: (task: string) => ({type: TypeKeys.ADD_TASK, payload: {task}} as const),
    deleteTaskAC: (taskId: string) => ({type: TypeKeys.DELETE_TASK, payload: {taskId}} as const),
    changeTaskStatusAC: (taskId: string, isDone: boolean) => ({type: TypeKeys.CHANGE_TASK_STATUS, payload: {taskId, isDone}} as const)
}

