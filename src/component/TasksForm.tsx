import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../store/store";
import { actions, FilterKeys, TasksType, TaskType } from "../store/tasks-reducer";
import { Task } from "./Task";


export function TasksForm() {

    const dispatch = useDispatch()

    const deleteTaskFromRedux = (id: string) => {
        dispatch(actions.deleteTaskAC(id))
    }

    const [title, setTitle] = useState<string>("")

    const [error, setError] = useState<string>("")

    const addTask = () => {
        if (title.trim() !== "") {
            dispatch(actions.addTaskAC(title.trim()))
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

    const onChangeCheckboxHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked
        dispatch(actions.changeTaskStatusAC(id, newIsDoneValue))
    }

    let [filter, setFilter] = useState<FilterKeys>(FilterKeys.All);

    let tasksForTodolist = useSelector<AppRootStateType, TasksType>(state => state.tasks);

    function FilterTasks(): TaskType[] {

        if (filter === FilterKeys.Active) {
            return tasksForTodolist.tasks.filter(t => !t.isDone);
        }
        if (filter === FilterKeys.Completed) {
            return tasksForTodolist.tasks.filter(t => t.isDone);
        }
        return tasksForTodolist.tasks
    }


    const onAllClickHandler = () => {
        setFilter(FilterKeys.All)
    }

    const onActiveClickHandler = () => {
        setFilter(FilterKeys.Active)
    }

    const onCompletedClickHandler = () => {
        setFilter(FilterKeys.Completed)
    }

    return (
        <div>
                <Task onAllClickHandler={onAllClickHandler}
                      onActiveClickHandler={onActiveClickHandler}
                      onCompletedClickHandler={onCompletedClickHandler}
                      FilterTasks={FilterTasks}
                      addTask={addTask}
                      deleteTask={deleteTask}
                      onChangeHandler={onChangeHandler}
                      onChangeCheckboxHandler={onChangeCheckboxHandler}
                      title={title}
                      error={error}
                />
        </div>
    )
}