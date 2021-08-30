import { v1 } from 'uuid';
import { InferActionsTypes } from './store';


export type TaskType = {
    id: string
    task: string
    isDone: boolean
}

export type TasksType = {
    tasks: TaskType[]
}

enum TypeKeys {
    ADD_TASK = 'ADD-TASK',
    DELETE_TASK = 'DELETE-TASK',
    CHANGE_TASK_STATUS = 'CHANGE-TASK-STATUS',
    UPDATE_STATE = 'UPDATE-STATE'
}

export enum FilterKeys {
    All = 'all',
    Active = 'active',
    Completed = 'completed'
}


const initialState: TasksType = {
    tasks:
        [
            {id: v1(), task: 'Я узнал, что у меня', isDone: false},
            {id: v1(), task: 'Есть огромная родня:', isDone: true},
            {id: v1(), task: 'И тропинка, и лесок,', isDone: false},
            {id: v1(), task: 'В поле — каждый колосок,', isDone: true},
            {id: v1(), task: 'Звери, птицы, и жуки,', isDone: false},
            {id: v1(), task: 'Муравьи и мотыльки…', isDone: true},
            {id: v1(), task: 'Всё, что рядышком со мною, —', isDone: false},
            {id: v1(), task: 'Это всё моё родное!', isDone: true},
            {id: v1(), task: 'Как же мне в краю родном', isDone: false},
            {id: v1(), task: 'Не заботиться о нём!', isDone: true}
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
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload.taskId) {
                        return {...task, isDone: action.payload.isDone}
                    }
                    return task
                })
            }
        }
        case TypeKeys.UPDATE_STATE: {
            return {...state, tasks: action.payload.tasks}
        }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    addTaskAC: (task: string) => ({type: TypeKeys.ADD_TASK, payload: {task}} as const),
    updateStateAC: (tasks: TaskType[]) => ({type: TypeKeys.UPDATE_STATE, payload: {tasks}} as const),
    deleteTaskAC: (taskId: string) => ({type: TypeKeys.DELETE_TASK, payload: {taskId}} as const),
    changeTaskStatusAC: (taskId: string, isDone: boolean) => ({
        type: TypeKeys.CHANGE_TASK_STATUS,
        payload: {taskId, isDone}
    } as const)
}

