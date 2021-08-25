import {v1} from "uuid";


export type TaskType = {
    id: string
    task: string
    isDone: boolean

}

export type TasksType = {
    tasks: TaskType[]
}

export type FilterValuesType = "all" | "active" | "completed"

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
                tasks: [...state.tasks, {id: v1(), task: action.task}]
            }
        }
        case TypeKeys.DELETE_TASK: {
            return {
                ...state,
                tasks: [...state.tasks.filter((s) => s.id !== action.taskId)]
            }
        }
        case TypeKeys.CHANGE_TASK_STATUS: {
            const stateCopy = {...state};
            const task = stateCopy.tasks.find(t => t.id === action.taskId);
            if (task) {
                task.isDone = action.isDone;
            }
            return stateCopy;
        }
        default:
            return state;

    }
}

type ActionsType = AddTaskActionType | DeleteTaskActionType | ChangeTaskStatusActionType

export enum TypeKeys {
    ADD_TASK = 'ADD-TASK',
    DELETE_TASK = 'DELETE-TASK',
    CHANGE_TASK_STATUS = 'CHANGE-TASK-STATUS'
}

export type AddTaskActionType = {
    type: TypeKeys.ADD_TASK
    task: string
}

export type DeleteTaskActionType = {
    type: TypeKeys.DELETE_TASK
    taskId: string
}

export type ChangeTaskStatusActionType = {
    type: TypeKeys.CHANGE_TASK_STATUS
    taskId: string
    isDone: boolean
}

export const addTaskAC = (task: string): AddTaskActionType => {
    return {type: TypeKeys.ADD_TASK, task}
}

export const deleteTaskAC = (taskId: string): DeleteTaskActionType => {
    return {type: TypeKeys.DELETE_TASK, taskId}
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean) => {
    return {type: TypeKeys.CHANGE_TASK_STATUS, taskId, isDone}
}

