import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {
    addTaskAC,
    changeTaskStatusAC,
    deleteTaskAC,
    FilterValuesType,
    TasksType,
    TaskType
} from "../store/Tasks-reducer";
import "./Tasks.module.css";
import classes from "./Tasks.module.css";


export function Tasks() {


    const dispatch = useDispatch()


    const deleteTaskFromRedux = (id: string) => {
        dispatch(deleteTaskAC(id))
    }

    let [title, setTitle] = useState("")

    let [error, setError] = useState<string>("")


    const addTask = () => {
        if (title.trim() !== "") {
            dispatch(addTaskAC(title.trim()))
            setTitle("");
        } else {
            setError("Title is required");
        }
    }


    const deleteTask = (id: string) => {
        deleteTaskFromRedux(id)
    }


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setTitle(e.currentTarget.value)
    }

    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        let newIsDoneValue = e.currentTarget.checked
        dispatch(changeTaskStatusAC(id, newIsDoneValue))
    }


    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = useSelector<AppRootStateType, TasksType>(state => state.tasks);

    function FilterTasks(): Array<TaskType> {

        if (filter === "active") {
            return tasksForTodolist.tasks.filter(t => !t.isDone);
        }
        if (filter === "completed") {
            return tasksForTodolist.tasks.filter(t => t.isDone);
        }
        return tasksForTodolist.tasks
    }


    const onAllClickHandler = () => {
        setFilter("all")
    }

    const onActiveClickHandler = () => {
        setFilter("active")

    }

    const onCompletedClickHandler = () => {
        setFilter("completed")
    }

    return (
        <div className={classes.main}>

            <b>Tasks:</b>
            <div>
                <input name={"Tasks"}
                       value={title}
                       onChange={onChangeHandler}
                       className={classes.input1}
                />
                <button className={classes.btnAdd} onClick={addTask}>+</button>
                {error && <div className={classes.errorMessage}>{error}</div>}
            </div>
            <div>


                {
                    FilterTasks().map((t) => {
                            if (t.task) {
                                return <div key={t.id} className={classes.taskStyle}>
                                    <p>{t.task}
                                        <input type={"checkbox"} checked={t.isDone || false} onChange={(e) => onChangeCheckboxHandler(e, t.id)}
                                               />
                                        <button className={classes.btnDelete} onClick={() => deleteTask(t.id)}>-
                                        </button>
                                    </p>
                                </div>
                            }
                        }
                    )
                }
                <div>
                    <button onClick={onAllClickHandler}>All</button>
                    <button onClick={onActiveClickHandler}>Active</button>
                    <button onClick={onCompletedClickHandler}>Completed</button>
                </div>
            </div>
        </div>


    )
}