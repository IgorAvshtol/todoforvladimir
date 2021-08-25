import {v1} from "uuid";


export type TaskType = {
    id: string
    task: string
    isDone: boolean

}

export type TasksType = {
    tasks: Array<TaskType>
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
        case 'ADD-TASK': {
            return {
                ...state,
                tasks: [...state.tasks, {id: v1(), task: action.task}]
            }
        }
        case 'DELETE-TASK': {
            return {
                ...state,
                tasks: [...state.tasks.filter((s) => s.id !== action.taskId)]
            }
        }
        case 'CHANGE-TASK-STATUS': {
            const stateCopy = {...state};
            let tasks = stateCopy;
            let task = tasks.tasks.find(t => t.id === action.taskId);
            if (task) {
                task.isDone = action.isDone;
            }
            console.log(stateCopy)
            return stateCopy;
        }
        default:
            return state;

    }
}

type ActionsType = AddTaskActionType | DeleteTaskActionType | ChangeTaskStatusActionType | FilterTasksActionType

export type AddTaskActionType = {
    type: 'ADD-TASK'
    task: string
}

export type DeleteTaskActionType = {
    type: 'DELETE-TASK'
    taskId: string
}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string
    isDone: boolean
}

export type FilterTasksActionType = {
    type: 'FILTER-TASKS'
    filter: FilterValuesType
}

export const addTaskAC = (task: string): AddTaskActionType => {
    return {type: 'ADD-TASK', task}
}

export const deleteTaskAC = (taskId: string): DeleteTaskActionType => {
    return {type: 'DELETE-TASK', taskId}
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean) => {
    return {type: 'CHANGE-TASK-STATUS', taskId, isDone}

}

export const changeTodolistFilterAC = (filter: FilterValuesType) => {
    return {type: 'FILTER-TASKS', filter: filter}
}