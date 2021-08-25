import React, { ChangeEvent } from "react";
import { TaskType } from "../store/tasks-reducer";
import classes from "./Task.module.css";
import { useDrag } from "react-dnd";

type TaskFormType = {
    onAllClickHandler: () => void;
    onActiveClickHandler: () => void;
    onCompletedClickHandler: () => void;
    FilterTasks: () => Array<TaskType>;
    addTask: () => void;
    deleteTask: (id: string) => void;
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeCheckboxHandler: (id: string, e: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    error: string
}


export function Task(props: TaskFormType) {

    const [{isDragging}, dragRef] = useDrag({
        type: "card",
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const onClickDeleteTask = (id: string) => {
        props.deleteTask(id)
    }

    const onClickChangeCheckboxHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeCheckboxHandler(id, e)
    }


    return (
        <div ref={dragRef} className={isDragging ? classes.mainForMovable : classes.main}>
            <b>Tasks:</b>
            <div>
                <input name={"Tasks"}
                       value={props.title}
                       onChange={props.onChangeHandler}
                       className={classes.input1}
                />
                <button className={classes.btnAdd} onClick={props.addTask}>+</button>
                {props.error && <div className={classes.errorMessage}>{props.error}</div>}
            </div>
            <div>
                {
                    props.FilterTasks().map((t) => {
                            if (t.task) {
                                return <div key={t.id} className={classes.taskStyle}>
                                    <p>{t.task}
                                        <input type={"checkbox"} checked={t.isDone || false}
                                               onChange={(e) => onClickChangeCheckboxHandler(t.id, e)}
                                        />
                                        <button className={classes.btnDelete} onClick={() => onClickDeleteTask(t.id)}>-
                                        </button>
                                    </p>
                                </div>
                            }
                        }
                    )
                }
                <div className={classes.allBtnStyle}>
                    <button onClick={props.onAllClickHandler}>All</button>
                    <button onClick={props.onActiveClickHandler}>Active</button>
                    <button onClick={props.onCompletedClickHandler}>Completed</button>
                </div>
            </div>
        </div>
    )
}